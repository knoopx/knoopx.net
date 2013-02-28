title: Hacking on nanoc3
created_at: 2010-09-26
excerpt: Adventures on how I built this blog hacking on nanoc3, a static web site generator.
----

* toc
{:toc}

## Preface

I used to have a blog but forgot I about it and accidentally destroyed it when performing a server upgrade.
I was using Wordpress, so all the posts where stored in a MySQL database. Everything was gone and I had no single backup.

I was a casual blogger, I didn't blog very often however some of the posts were valuable. Now after time have passed, I wanted to have a blog again but differently.
{: .data-pullquote="I neither wanted to host it myself because I knew I would be switching hosting providers in the future or just no longer paying for them."}
As the experience shown and as I programmer I am, I was not going to build another blog upon Wordpress.

I neither wanted to host it myself because I knew I would be switching hosting providers in the future or just no longer paying for them.

## Blogging again

I knew I would use [Heroku](http://heroku.com/) or [GitHub](http://github.com/)'s pages for hosting it, however Heroku's free account is too limited and went for [GitHub Pages](http://pages.github.com/).
The defacto standard for blogging on GitHub is [Jekyll](http://jekyllrb.com/) but I didn't like it at all.
After playing arround with some static web generators I rediscovered [nanoc3](http://nanoc.stoneship.org/) which I previously used and came very handy for this situation.

## Getting rid of pretty urls

While nanoc3 was pretty much what I was looking for, it's item identifier thing behaved weirdly.

By default, `nanoc3::Item#identifier` automatically strips file extensions and appends a slash at the end of the item.
So, the identifier for a file on the `content` directory `/content/posts/awesome_post.markdown` returns `/posts/awesome_post/`
forcing us to append `index.html` when routing it:

~~~ ruby
route "/posts/*" do
  item.identifier + "index.html"
end
~~~

While this may be cool for having pretty urls like `http://www.example.com/post/awesome_post/` I found it a bit cumbersome.
Moreover I wanted to create a projects page, which would be picking the files from `content/projects` and generating a single master page from them.
There was no need to generate per-project pages but this totally failed:

~~~ ruby
route "/projects/*" do
  # Just skip per-project pages
end

route "/projects" do
  "/projects.html"
end
~~~

The first rule matched the master page too, no `projects/index.html` or `projects/awesome_project/index.html` where compiled at all.
So I decided to monkey-patch nanoc3 to completly disable this behavour and put this into `lib/ugly_urls.rb`:

~~~ ruby
module Nanoc3
  class ItemRep
    def layout_with_identifier(layout_identifier)
      @item.site.layouts.find { |l| File.basename(l.identifier, ".*") == layout_identifier } or
              raise Nanoc3::Errors::UnknownLayout.new(layout_identifier)
    end
  end
end

class Nanoc3::DataSources::FilesystemUnified
  def identifier_for_filename(filename)
    path = filename.split("/")
    filename = path.pop
    extensions = filename.split(".")
    basename = extensions.shift

    case extensions.size
      when 0
        path << filename
      when 1
        extensions.insert(0, basename)
        path << extensions.join(".")
      when 2
        extension = extensions.pop
        extensions.insert(0, basename)
        path << extensions.join(".")
      else
        raise Exception.new("Dots in filenames are not allowed")
    end

    path.join("/")
  end
end

module Nanoc3::StringExtensions
  def cleaned_identifier
    "/#{self}".gsub(/^\/+|\/+$/, '/')
  end
end
~~~

So what is this supposed to do? Well, If you are familiar with Rails you may known that view templates have two extensions in the filename (`my_page.html.erb`).
The last one is the source format and the second one the compiled format. Wouldn't it be nice if we could just follow the same principle?

This patch makes a file `content/posts/awesome_post.html.markdown` have an identifier `/posts/awesome_post.html` instead of `/posts/awesome_post/`.

Now I can perform what I really wanted to do with projects:

~~~ ruby
route "/projects/*" do
  # Just skip per-project pages
end

route "/projects.html" do
  item.identifier
end
~~~

and automatically apply filters based on the extension:

~~~ ruby
compile '*' do
  case item[:extension]
    when "html.markdown"
      filter :kramdown
    when "html.haml"
      filter :haml
  end
  layout 'default'
end

route '*' do
  item.identifier
end
~~~

## Compass integration

When I started developing in Rails I just felt in love with [Compass](http://compass-style.org/).
Since then I never wrote a single line of HTML/CSS. This time wouldn't be different.

It was as easy as pasting this at the top of the `Rules` file:

~~~ ruby
require 'compass'

Compass.configuration do |config|
  config.project_path = File.dirname(__FILE__)
  config.http_path = "/"

  config.css_dir = "public/stylesheets"
  config.sass_dir = "stylesheets"
  config.images_dir = "public/images"
  config.javascripts_dir = "public/javascripts"
end
~~~

creating a directory structure like this:

    /content/stylesheets
    /content/stylesheets/mixins
    /content/stylesheets/partials
    /content/stylesheets/partials/content.sass
    /content/stylesheets/partials/defaults.sass
    /content/stylesheets/partials/footer.sass
    /content/stylesheets/partials/header.sass
    /content/stylesheets/screen.css.sass

and adding some rules for skipping `partials` and `mixins` and compiling the root stylesheets:

~~~ ruby
compile '/stylesheets/partials|mixins/*' do
  # Skip partials
end

route '/stylesheets/partials|mixins/*' do
  # Skip partials
end

compile '/stylesheets/*' do
  filter :sass, Compass.sass_engine_options
end

route '/stylesheets/*' do
  item.identifier
end
~~~