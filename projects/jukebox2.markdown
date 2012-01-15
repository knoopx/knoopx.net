name: Jukebox2
url: http://github.com/knoopx/jukebox2
description: Jukebox2 is a revamped version of my previous self-hosted Grooveshark-alike music streaming web application.
----

# Jukebox2

Jukebox2 is a revamped version of my previous self-hosted [Grooveshark](http://www.grooveshark.com)-alike music streaming web application.
Point your mp3 library path and it will scan and index your mp3 tracks along with [last.fm](http://last.fm) metadata.

You can even surf across your library and the music will keep playing on the background as it's 100% AJAX!
It's built on [Ruby on Rails](http://rubyonrails.org/), [Haml](http://haml-lang.com/), [Compass](http://compass-style.org/), [jQuery](http://jquery.com/), [jPlayer](http://jplayer.org/) and [pjax](http://pjax.heroku.com/).

<%= thumb "jukebox2.png" %>


## Prerequisites

* A database server which defaults to [MySQL](http://www.mysql.com/). You change it to [sqlite3](http://www.sqlite.org/) modifing `config/database.yml`
* [taglib](http://developer.kde.org/~wheeler/taglib.html) (`brew install taglib`)

## Installation

	$ git clone git@github.com:knoopx/jukebox2.git
	$ cd jukebox2/
	$ bundle
    % bundle exec rake db:reset

## Usage

* Start the server

      $ rails s

* Add your library folder as `Source` and click `Scan Sources`

      $ open http://localhost:3000

* Play your music :)

## Hacking

Source code is publicly available in [GitHub](https://github.com/knoopx/jukebox2). Feel free to fork it and send pull requests!
Bugs and feature requests are on [GitHub Issues](https://github.com/knoopx/jukebox2/issues).