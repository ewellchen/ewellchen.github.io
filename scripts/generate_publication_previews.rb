#!/usr/bin/env ruby
# frozen_string_literal: true

require "bibtex"
require "fileutils"
require "rexml/text"
require "tempfile"

ROOT = File.expand_path("..", __dir__)
OUTPUT = File.join(ROOT, "assets", "img", "publication_preview")
TOPICS = {
  "quantum" => ["QUANTUM MACHINE LEARNING", "#167a82"],
  "imaging" => ["COMPUTATIONAL IMAGING", "#b24f42"],
  "industrial" => ["INDUSTRIAL SIGNAL PROCESSING", "#5664a2"]
}.freeze

def escape(value)
  REXML::Text.normalize(value.to_s)
end

def lines_for(title, max_length: 34, max_lines: 5)
  lines = [""]
  title.split.each do |word|
    if (lines.last.length + word.length + 1) > max_length && !lines.last.empty?
      lines << word
    else
      lines[-1] = [lines.last, word].reject(&:empty?).join(" ")
    end
  end
  lines.first(max_lines)
end

FileUtils.mkdir_p(OUTPUT)
BibTeX.open(File.join(ROOT, "_bibliography", "papers.bib")).each do |entry|
  key = entry.key.to_s
  preview = entry[:preview]&.to_s
  next if preview && preview != "#{key}.png"

  label, accent = TOPICS.fetch(entry[:topic].to_s)
  venue = (entry[:journal] || entry[:booktitle]).to_s
  title_lines = lines_for(entry[:title].to_s)
  title_svg = title_lines.each_with_index.map do |line, index|
    %(<text x="46" y="#{111 + (index * 38)}" font-size="29" font-weight="600" fill="#17252d">#{escape(line)}</text>)
  end.join("\n")
  svg = <<~SVG
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
      <rect width="640" height="360" fill="#f6f8f8"/>
      <rect width="640" height="9" fill="#{accent}"/>
      <g font-family="Arial, sans-serif">
        <text x="46" y="52" font-size="16" font-weight="700" fill="#{accent}">#{label}</text>
        <text x="594" y="52" font-size="17" text-anchor="end" fill="#58666d">#{escape(entry[:year])}</text>
        #{title_svg}
        <line x1="46" y1="298" x2="594" y2="298" stroke="#cdd6d9" stroke-width="1"/>
        <text x="46" y="330" font-size="18" fill="#58666d">#{escape(venue[0, 52])}</text>
      </g>
    </svg>
  SVG

  Tempfile.create(["paper-cover-", ".svg"]) do |file|
    file.write(svg)
    file.flush
    output = File.join(OUTPUT, "#{key}.png")
    abort "Could not render #{key}" unless system("magick", "-background", "none", file.path, output)
    puts output
  end
end
