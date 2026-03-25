require 'open-uri'
require 'nokogiri'
require 'yaml'

module Jekyll
  class ScholarStats < Generator
    SCHOLAR_ID = '9VTFIJcAAAAJ'.freeze
    SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user='.freeze
    CACHE_FILE = '_data/scholar_cache.yml'.freeze

    def generate(site)
      tbl_data = fetch_live || load_cache
      site.data['scholar'] = tbl_data

      # Save cache if we got live data
      if tbl_data['citations'] && tbl_data['citations'] > 0
        save_cache(tbl_data)
      end
    end

    private

    def fetch_live
      doc = Nokogiri::HTML(URI.parse(SCHOLAR_URL + SCHOLAR_ID).open)
      tbl = doc.css('table').first
      return nil unless tbl

      tbl_data = { 'id' => SCHOLAR_ID }
      tbl.css('tr')[1..].each do |tr|
        cell_data = tr.css('td').map(&:text)
        tbl_data[cell_data[0].downcase.sub('-', '_')] = cell_data[1].to_i
      end
      Jekyll.logger.info "ScholarStats:", "Fetched live Google Scholar metrics"
      tbl_data
    rescue => e
      Jekyll.logger.warn "ScholarStats:", "Live fetch failed (#{e.message}), using cache"
      nil
    end

    def load_cache
      if File.exist?(CACHE_FILE)
        data = YAML.safe_load(File.read(CACHE_FILE))
        Jekyll.logger.info "ScholarStats:", "Loaded cached metrics (citations: #{data['citations']})"
        data
      else
        Jekyll.logger.warn "ScholarStats:", "No cache found, using zeros"
        { 'id' => SCHOLAR_ID, 'citations' => 0, 'h_index' => 0, 'i10_index' => 0 }
      end
    end

    def save_cache(data)
      File.write(CACHE_FILE, data.to_yaml)
      Jekyll.logger.info "ScholarStats:", "Saved cache to #{CACHE_FILE}"
    rescue => e
      Jekyll.logger.warn "ScholarStats:", "Could not save cache: #{e.message}"
    end
  end
end
