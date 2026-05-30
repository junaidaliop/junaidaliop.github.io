# frozen_string_literal: true
#
# Wraps the jekyll-socials gem's SocialLinksTag#render to rewrite the
# auto-generated title="..." attributes (which read like "Cv pdf",
# "Scholar userid", "Orcid id", ...) into properly capitalised labels.
#
# The gem builds titles by snake_case_key.gsub('_', ' ').capitalize, which
# only uppercases the first letter and produces ugly tooltips on hover.
# Editing the vendored gem source is fragile across bundle updates, so we
# patch the public render method at boot.
require 'jekyll-socials' if defined?(Bundler)

module Jekyll
  class SocialLinksTag
    NICE_TITLES = {
      "Cv pdf"                => "Download CV (PDF)",
      "Email"                 => "Email",
      "Github username"       => "GitHub",
      "Gitlab username"       => "GitLab",
      "Scholar userid"        => "Google Scholar",
      "Orcid id"              => "ORCID",
      "Linkedin username"     => "LinkedIn",
      "Research gate profile" => "ResearchGate",
      "Dblp url"              => "dblp",
      "Semanticscholar id"    => "Semantic Scholar",
      "Acm id"                => "ACM Digital Library",
      "Ieee id"               => "IEEE Xplore",
      "Arxiv id"              => "arXiv",
      "Inspirehep id"         => "INSPIRE-HEP",
      "Wikidata id"           => "Wikidata",
      "X username"            => "X (Twitter)",
      "Bluesky url"           => "Bluesky",
      "Mastodon username"     => "Mastodon",
      "Kaggle id"             => "Kaggle",
      "Stackoverflow id"      => "Stack Overflow",
      "Youtube id"            => "YouTube",
      "Medium username"       => "Medium",
      "Instagram id"          => "Instagram",
      "Facebook id"           => "Facebook",
      "Telegram username"     => "Telegram",
      "Whatsapp number"       => "WhatsApp",
      "Discord id"            => "Discord",
      "Spotify id"            => "Spotify",
      "Lastfm id"             => "Last.fm",
      "Strava userid"         => "Strava",
      "Pinterest id"          => "Pinterest",
      "Letterboxd id"         => "Letterboxd",
      "Flickr id"             => "Flickr",
      "Unsplash id"           => "Unsplash",
      "Keybase username"      => "Keybase",
      "Quora username"        => "Quora",
      "Zotero username"       => "Zotero",
      "Osf id"                => "OSF",
      "Hal id"                => "HAL",
      "Lattes id"             => "Lattes",
      "Scopus id"             => "Scopus",
      "Publons id"            => "Publons",
      "Wechat username"       => "WeChat",
      "Academia edu"          => "Academia.edu",
      "Blogger url"           => "Blogger",
      "Rss icon"              => "RSS Feed",
      "Wikipedia id"          => "Wikipedia",
      "Work url"              => "Website"
    }.freeze

    original_render = instance_method(:render)

    define_method(:render) do |context|
      output = original_render.bind(self).call(context)
      NICE_TITLES.each do |bad, good|
        # gem emits title='...' (single quotes); also be defensive about double quotes
        output = output.gsub("title='#{bad}'", "title='#{good}'")
        output = output.gsub("title=\"#{bad}\"", "title=\"#{good}\"")
        # alt attribute on logo-image variants uses the same string
        output = output.gsub("alt='#{bad}'", "alt='#{good}'")
        output = output.gsub("alt=\"#{bad}\"", "alt=\"#{good}\"")
      end
      output
    end
  end
end
