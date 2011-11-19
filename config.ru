$: << File.join(File.dirname(__FILE__), "lib")

require 'bundler/setup'
Bundler.require

require 'helpers'
require 'article'
require 'project'

Sass::Engine::DEFAULT_OPTIONS[:load_paths].push *Compass.sass_engine_options[:load_paths]
Kramdown::Options.definitions[:coderay_css].default = :class
Kramdown::Options.definitions[:coderay_line_numbers].default = nil

class App < Sinatra::Base
  set :root, File.expand_path(File.dirname(__FILE__))
  set :views, File.join(root, "template")
  set :default_encoding, "utf-8"

  helpers do
    include Helpers
  end

  get "/" do
    haml :index, :layout => :default
  end

  get "/projects" do
    haml :projects, :layout => :default
  end

  get "/projects/:slug" do
    @project = Project.find(params[:slug])
    markdown @project.body, :layout => :default, :layout_engine => :haml
  end

  get "/pages/:name" do
    body = render(:erb, File.read("pages/#{params[:name]}.markdown", :mode => "rb"))
    markdown body, :layout => :default, :layout_engine => :haml
  end

  get "/:year/:month/:day/:slug" do
    @article = Article.find(params[:slug])
    markdown @article.body, :layout => :article, :layout_engine => :haml
  end
end

use Rack::Thumb
use Rack::Static, :urls => ["/galleries"]

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path(File.join(File.dirname(__FILE__), 'template', 'assets', 'stylesheets'))
  environment.append_path(File.join(File.dirname(__FILE__), 'template', 'assets', 'javascripts'))
  environment.append_path(File.join(File.dirname(__FILE__), 'template', 'assets', 'images'))
  run environment
end

map '/' do
  run App
end