require 'engine'

Application = Rack::Builder.new do
  use Rack::Thumb
  use Rack::Static, urls: ['/galleries', '/images']

  map '/' do
    run Engine
  end

  map '/assets' do
    env = Sprockets::Environment.new(Engine.root)
    env.append_path(File.join('template', 'assets', 'stylesheets'))
    env.append_path(File.join('template', 'assets', 'javascripts'))
    env.append_path(File.join('template', 'assets', 'images'))
    run env
  end
end.to_app