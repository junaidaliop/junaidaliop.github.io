require 'open-uri'
require 'nokogiri'

module Jekyll
  class ScholarStats < Generator
    SCHOLAR_ID = '9VTFIJcAAAAJ'.freeze
    SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user='.freeze

    def generate(site)
      begin
        doc = Nokogiri::HTML(URI.parse(SCHOLAR_URL + SCHOLAR_ID).open)
        tbl = doc.css('table').first
        tbl_data = { 'id' => SCHOLAR_ID }
        if tbl
          tbl.css('tr')[1..].each do |tr|
            cell_data = tr.css('td').map(&:text)
            tbl_data[cell_data[0].downcase.sub('-', '_')] = cell_data[1].to_i
          end
        end
        site.data['scholar'] = tbl_data
        Jekyll.logger.info "ScholarStats:", "Fetched Google Scholar metrics for #{SCHOLAR_ID}"
      rescue => e
        Jekyll.logger.warn "ScholarStats:", "Could not fetch Google Scholar data: #{e.message}"
        site.data['scholar'] = {
          'id' => SCHOLAR_ID,
          'citations' => 0,
          'h_index' => 0,
          'i10_index' => 0
        }
      end
    end
  end
end
