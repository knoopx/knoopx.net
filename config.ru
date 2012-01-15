$: << File.join(File.dirname(__FILE__), "lib")

require 'bundler/setup'
Bundler.require

require 'helpers'
require 'article'
require 'project'

Sass::Engine::DEFAULT_OPTIONS[:load_paths].push *Compass.sass_engine_options[:load_paths]
Kramdown::Options.definitions[:coderay_css].default = :class
Kramdown::Options.definitions[:coderay_line_numbers].default = nil

class BlogEngine < Sinatra::Base
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
    body = render(:erb, @project.body)
    markdown(body, :layout => :project, :layout_engine => :haml)
  end

  get "/pages/:name" do
    body = render(:erb, File.read("pages/#{params[:name]}.markdown", :mode => "rb"))
    markdown(body, :layout => :default, :layout_engine => :haml)
  end

  get "/:year/:month/:day/:slug" do
    @article = Article.find(params[:slug])
    markdown @article.body, :layout => :article, :layout_engine => :haml
  end
end

BlogApplication = Rack::Builder.new do
  use Rack::Thumb
  use Rack::Static, :urls => ['/galleries', '/images']

  map '/' do
    run BlogEngine
  end

  map '/assets' do
    env = Sprockets::Environment.new(BlogEngine.root)
    env.append_path(File.join('template', 'assets', 'stylesheets'))
    env.append_path(File.join('template', 'assets', 'javascripts'))
    env.append_path(File.join('template', 'assets', 'images'))
    run env
  end
end.to_app

run BlogApplication