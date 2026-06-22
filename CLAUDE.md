# Repo conventions for Claude Code sessions

This file is read automatically by Claude Code at session start. Treat its rules as standing instructions for any work in this repository.

## Commit messages: no AI attribution, ever

Do **not** add any of the following trailers to commit messages in this repo:

- `Co-Authored-By: Claude <...>` (or any Claude-model variant)
- `Claude-Session: ...`
- Any other Claude- or Anthropic-related signoff line
- `Generated with Claude Code` footers, emoji robots, etc.

Write plain human-style commit messages: a concise subject line, optionally a short body. Nothing else.

The user is the sole human author of this academic portfolio site. The public GitHub contributors graph and `git log` should reflect only him. AI trailers cause a bot account to appear in the contributors graph, which is explicitly unwanted.

If a session inherits past commits that still carry these trailers, the user has previously authorized history rewrites (interactive rebase or `git filter-repo --message-callback`) plus a force-push on `main` to clean them out. Do not skip hooks or signing while doing so.

## Commit messages: plain and human, no AI-tells

Write commit messages the way a person would. Keep them short and factual. Do NOT use:

- words that read as machine/process jargon: "verbatim", "per audit", "AI-tell(s)", "tighten prose", "surface" (as a verb), "leverage", "comprehensive"
- em-dashes or en-dashes (use commas/colons)
- long multi-clause subject lines stuffed with every file touched

Prefer: "Add Fractional ML/DL framing to site text", "Fix cv.yml build break", "Use Inter for body text". Describe the change, not the process that produced it.

## Other standing preferences

- Minimum use of em-dashes (`—`) and en-dashes (`–`) in user-facing prose (project pages, news, abstracts). They are an AI-writing tell; prefer commas, colons, periods, semicolons, or parentheses.
- When rewriting prose for the site, use the user's own wording from the source material (READMEs, companion sites, publisher abstracts) whenever possible. Do not paraphrase into generic AI cadence.
- No emojis in committed files unless the user explicitly asks.
