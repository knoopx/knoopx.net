name: Scene Toolkit
url: http://github.com/knoopx/scene-toolkit
description: An utility to assist scene MP3 library maintenance
----

# Scene-Toolkit

An utility to assist scene MP3 library maintenance

## Installation

    $ gem install scene-toolkit

## Usage

    $ scene-toolkit
		Commands

		playlists [directory]         # Generate missing or invalid release playlists
		  -f/--force                  # Force the modification of existing files
		auto_rename [directory]       # Repair release names
		verify [directory]            # Verify library or release. Executes all validations if none specified
		  -c/--checksum               # Validate release CRC-32 checksum
		  -n/--name                   # Validate release name
		  -p/--playlist               # Validate playlist against existing files
		  -F/--files                  # Validate inclusion of required files
		  -h/--hide-valid             # Do not display valid releases results
		  -i/--ignore-filename-case   # Ignore case when validating SFV/M3U filenames
		  -m/--move-invalid-to=[STRING]   # Move INVALID releases to specified folder
		  -M/--move-valid-to=[STRING]   # Move VALID releases to specified folder

		Global options

		-?/--help                     # Print help message

## Screenshot

![Jukebox](/images/scene-toolkit.png)