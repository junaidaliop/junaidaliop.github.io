/* Publications page enhancements:
   - Topic-chip filter that hides non-matching entries with .chip-hidden.
     This composes with al-folio's bibsearch (which uses .unloaded): an entry
     stays visible only when it carries neither class, since both are display:none.
   - Injects a per-year count into the sticky year headers.
   Vanilla JS, no dependencies. Degrades gracefully: with JS off, every entry
   and every chip-less view stays visible. */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn, { once: true });
  }

  ready(function () {
    var lists = document.querySelectorAll("ol.bibliography");
    if (!lists.length) return;

    // ---- per-year counts in the sticky h2 headers ----
    document.querySelectorAll("h2.bibliography").forEach(function (h2) {
      var el = h2.nextElementSibling;
      while (el && el.tagName !== "OL" && el.tagName !== "H2") el = el.nextElementSibling;
      if (el && el.tagName === "OL") {
        var n = el.querySelectorAll(":scope > li").length;
        if (n && !h2.querySelector(".year-group__count")) {
          var span = document.createElement("span");
          span.className = "year-group__count";
          span.textContent = "(" + n + ")";
          h2.appendChild(span);
        }
      }
    });

    // ---- topic chips ----
    var chipBar = document.getElementById("topic-chips");
    if (!chipBar) return;
    var chips = chipBar.querySelectorAll(".topic-chip");
    var items = document.querySelectorAll(".bibliography > li");

    function keywordsOf(li) {
      var holder = li.querySelector("[data-keywords]");
      var raw = holder ? holder.getAttribute("data-keywords") || "" : "";
      return raw.toLowerCase().split(/[;,\s]+/).filter(Boolean);
    }

    function isHidden(li) {
      // hidden by the topic chip OR by the bibsearch text filter
      return li.classList.contains("chip-hidden") || li.classList.contains("unloaded");
    }

    // empty-state message shown when no entry survives the active filters
    var emptyEl = document.createElement("p");
    emptyEl.className = "bib-empty";
    emptyEl.hidden = true;
    emptyEl.textContent = "No publications match the current filters.";
    var firstList = lists[0];
    firstList.parentNode.insertBefore(emptyEl, firstList);

    function syncYearHeaders() {
      var anyVisible = false;
      document.querySelectorAll("h2.bibliography").forEach(function (h2) {
        var el = h2.nextElementSibling;
        while (el && el.tagName !== "OL" && el.tagName !== "H2") el = el.nextElementSibling;
        if (!el || el.tagName !== "OL") return;
        var lis = el.querySelectorAll(":scope > li");
        var allHidden = true;
        lis.forEach(function (li) {
          if (!isHidden(li)) { allHidden = false; anyVisible = true; }
        });
        h2.classList.toggle("chip-hidden", allHidden && lis.length > 0);
      });
      emptyEl.hidden = anyVisible;
    }

    function applyTopic(topic) {
      items.forEach(function (li) {
        if (topic === "all") {
          li.classList.remove("chip-hidden");
        } else {
          li.classList.toggle("chip-hidden", keywordsOf(li).indexOf(topic) === -1);
        }
      });
      syncYearHeaders();
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
        applyTopic(chip.getAttribute("data-topic"));
      });
    });

    // Re-sync year headers + empty-state after the bibsearch filter runs, so the
    // chip filter and the text search agree on what is empty.
    var searchInput = document.getElementById("bibsearch");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        setTimeout(syncYearHeaders, 350);
      });
    }
  });
})();
