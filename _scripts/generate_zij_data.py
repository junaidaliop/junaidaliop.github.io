#!/usr/bin/env python3
"""Snapshot the zij optimizer Canon into a JSON file for the on-site searchable table.

Pulls every category table from the zij repo's canon/*.md files, parses the
Markdown tables, and writes assets/json/zij_optimizers.json. Re-run whenever the
upstream Canon changes:

    python3 _scripts/generate_zij_data.py
"""
import json
import re
import sys
import urllib.request
from pathlib import Path

RAW = "https://raw.githubusercontent.com/junaidaliop/zij/main/canon/{}.md"
SITE = "https://junaidaliop.github.io/zij/canon/{}/"

# slug -> display name (order = display order)
CATEGORIES = [
    ("first-order", "First-order"),
    ("memory-efficient", "Memory-efficient"),
    ("fractional", "Fractional-order"),
    ("distributed", "Distributed"),
    ("second-order", "Second-order"),
    ("zeroth-order", "Zeroth-order"),
    ("privacy-preserving", "Privacy-preserving"),
    ("sharpness-aware", "Sharpness-aware"),
    ("quantum", "Quantum"),
    ("lr-free", "Learning-rate-free"),
    ("schedulers", "Schedulers"),
]

LINK = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")


def strip_links(cell):
    """Return (text, first_url) — text with link markup removed, plus first href."""
    urls = [m.group(2) for m in LINK.finditer(cell)]
    text = LINK.sub(lambda m: m.group(1), cell).strip()
    return text, (urls[0] if urls else None)


def fetch(slug):
    url = RAW.format(slug)
    req = urllib.request.Request(url, headers={"User-Agent": "zij-snapshot"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8")


def parse_table(md, slug, display):
    rows = []
    for line in md.splitlines():
        line = line.strip()
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        # tables are either 4 cols (Optimizer|Venue|Paper|Code) or
        # 5 cols (... |zij). Anything shorter is not a data row.
        if len(cells) < 4:
            continue
        # skip header + separator rows. Category tables use different first-column
        # headers ("Optimizer", "Scheduler", ...), so match any of them and also
        # guard against a header/template row where the venue cell literally reads
        # "Venue".
        if cells[0].lower() in ("optimizer", "scheduler", "method", "name", "") or set(cells[0]) <= set("-: "):
            continue
        if cells[1].strip().lower() == "venue":
            continue

        name, math_href = strip_links(cells[0])
        venue = cells[1].strip()
        paper_title, paper_url = strip_links(cells[2])
        code_text, code_url = strip_links(cells[3])
        zij_raw = cells[4] if len(cells) >= 5 else "—"

        code_type = code_text.lower() if code_text and code_text != "—" else None
        classes = [c.strip().strip("`") for c in zij_raw.split(",")] if zij_raw and zij_raw != "—" else []
        classes = [c for c in classes if c and c != "—"]

        rows.append({
            "name": name,
            "category": display,
            "category_slug": slug,
            "venue": venue if venue != "—" else None,
            "paper_title": paper_title if paper_title != "—" else None,
            "paper_url": paper_url,
            "code_type": code_type,        # official | community | None
            "code_url": code_url,
            "zij_classes": classes,        # [] when paper-only / not implemented
            "implemented": bool(classes),
        })
    return rows


def main():
    all_rows = []
    counts = {}
    for slug, display in CATEGORIES:
        try:
            md = fetch(slug)
        except Exception as e:  # noqa: BLE001
            print(f"WARN: could not fetch {slug}: {e}", file=sys.stderr)
            continue
        rows = parse_table(md, slug, display)
        counts[display] = len(rows)
        all_rows.append((display, rows))

    flat = [r for _, rows in all_rows for r in rows]
    implemented = sum(1 for r in flat if r["implemented"])

    out = {
        "source": "https://github.com/junaidaliop/zij",
        "companion": "https://junaidaliop.github.io/zij/",
        "totals": {
            "methods": len(flat),
            "implemented": implemented,
            "categories": len([c for c in counts if counts[c]]),
        },
        "category_order": [d for _, d in CATEGORIES],
        "category_pages": {d: SITE.format(s) for s, d in CATEGORIES},
        "category_counts": counts,
        "optimizers": flat,
    }

    dest = Path(__file__).resolve().parent.parent / "assets" / "json" / "zij_optimizers.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Wrote {dest}")
    print(f"  methods={len(flat)} implemented={implemented} categories={out['totals']['categories']}")
    for d, n in counts.items():
        print(f"  {d}: {n}")


if __name__ == "__main__":
    main()
