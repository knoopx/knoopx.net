name: Jukebox
url: http://github.com/knoopx/jukebox
description: Jukebox is a self-hosted Grooveshark-alike music streaming web application. Point your mp3 library path and it will scan and index your mp3 track along with last.fm metadata.
----

# Jukebox

Jukebox is a self-hosted [Grooveshark](http://www.grooveshark.com)-alike music streaming web application.
Point your mp3 library path and it will scan and index your mp3 track along with [last.fm](http://last.fm) metadata.

![Jukebox](/images/jukebox.png)

## Installation

	$ git clone git@github.com:knoopx/jukebox.git
	$ cd jukebox/
	$ bundle

## Usage

Add your library folder as source and start indexing

	$ rails c
	> Source.create!(:path => "/Volumes/Mp3")
	> quit
    $ rake jukebox:scan

Start the server and start playing :)

	$ rails s
	$ open http://localhost:3000

## Future Plans

I'm no longer mantaining this project, instead a new revamped version built on Ruby on Rails 3.1, Twitter Bootstrap and PJAX is comming!