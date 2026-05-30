# frozen_string_literal: true
#
# Strips URLs that shouldn't be in the sitemap.
#
# The Google Search Console HTML-file verification token
# (googlea991e09258ef6bd2.html) sits at the repo root as a static file
# with no frontmatter -- we cannot set `sitemap: false` on it without
# rewriting the body away from the verbatim content Google issued.
# Instead, post-process site.dest/sitemap.xml after jekyll-sitemap
# emits it and excise any <url> entries matching the deny list.

EXCLUDE_PATTERNS = [
  /googlea[0-9a-f]+\.html/,                 # GSC HTML-file verification token
  /BingSiteAuth\.xml/i                      # future-proof: Bing equivalent
].freeze

Jekyll::Hooks.register :site, :post_write do |site|
  sitemap = File.join(site.dest, "sitemap.xml")
  next unless File.exist?(sitemap)

  raw = File.read(sitemap)
  cleaned = raw.dup

  EXCLUDE_PATTERNS.each do |pattern|
    # Match a single <url>...</url> block whose <loc> contains the pattern.
    # Greedy but bounded: stops at the next closing </url>.
    cleaned = cleaned.gsub(
      /\s*<url>\s*<loc>[^<]*#{pattern.source}[^<]*<\/loc>.*?<\/url>/m,
      ""
    )
  end

  if cleaned != raw
    File.write(sitemap, cleaned)
    Jekyll.logger.info "SitemapCleanup:", "stripped excluded URLs from sitemap.xml"
  end
end
