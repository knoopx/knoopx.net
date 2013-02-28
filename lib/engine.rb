require 'helpers'
require 'article'
require 'project'

class Engine < Sinatra::Base
  set :root, File.expand_path('../..', __FILE__)
  set :views, File.join(root, 'template')
  set :default_encoding, 'utf-8'

  helpers { include Helpers }

  get '/' do
    haml :index, layout: :default
  end

  get '/projects' do
    haml :projects, layout: :default
  end

  get '/projects/:slug' do
    @project = Project.find(params[:slug]) or raise Sinatra::NotFound
    body = render(:erb, @project.body)
    markdown(body, layout: :project, layout_engine: :haml)
  end

  get '/pages/:name' do
    body = render(:erb, File.read("pages/#{params[:name]}.markdown", mode: 'rb'))
    markdown(body, layout: :default, layout_engine: :haml)
  end

  get '/:year/:month/:day/:slug' do
    @article = Article.find(params[:slug]) or raise Sinatra::NotFound
    markdown @article.body, layout: :article, layout_engine: :haml
  end
end