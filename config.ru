$: << File.join(File.dirname(__FILE__), "lib")

require 'bundler/setup'
Bundler.require

require 'application'

Sass.load_paths.push *Compass.sass_engine_options[:load_paths]
Kramdown::Options.definitions[:coderay_css].default = :class
Kramdown::Options.definitions[:coderay_line_numbers].default = nil

run Application