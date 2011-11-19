name: imp3
url: http://github.com/knoopx/imp3
description: iMp3 is an application for batch processing and fixing common issues when dealing with a large iTunes library.
----
# iMp3

iMp3 is an application for batch processing and fixing common issues when dealing with a large iTunes library.

{:.alert}
This is an experimental application, I take no responsability of any damage it can cause to your files. Use it at your own risk.

## Usage

Automatically tag track genres with tags from last.fm:

    $ imp3 genres fetch
    53% |=============............| Tagging track 911DA9F96A9D7003 with genre 'sludge'

Automatically detect and merge duplicate artist names:

    $ imp3 artists misspelled
    Misspelled artist name scan complete.

    What is the correct artist name for L'Antietam
    1. L'Antietam
    2. L'antietam
    3. (Skip)
    ?  1
    Tagging track 851744AFF27C75D1 with artist name 'L'Antietam'

    177 artists.
    1479 tracks.
    1 tracks tagged.
    0 requests.
    0 errors.

Ignore a tag, so is no longer used for tagging tracks:

    $ imp3 genres ignore-add singer-songwriter
    Genre 'singer-songwriter' added to ignore list


List ignored tags:

    $ imp3 genres ignore-list
    +-------------------+
    | Genre             |
    +-------------------+
    | singer-songwriter |
    | polish            |
    | swedish           |
    +-------------------+

Show a summary of genres and the number of tracks tagged with:

    $ imp3 genres list
    +-------------------+--------+
    | Genre             | Tracks |
    +-------------------+--------+
    | screamo           | 398    |
    | post-rock         | 252    |
    | hardcore          | 116    |
    | post-hardcore     | 81     |
    | sludge            | 72     |
    | indie             | 67     |
    | rock              | 58     |
    | math-rock         | 44     |
    | thrashcore        | 38     |
    | emo               | 36     |
    | electronic        | 33     |
    | crust             | 32     |
    | mathcore          | 29     |
    | post-metal        | 26     |
    | metalcore         | 23     |
    | punk              | 21     |
    | grindcore         | 21     |
    | crustcore         | 15     |
    | ska               | 11     |
    | indie-rock        | 11     |
    | deathcore         | 10     |
    | black-metal       | 9      |
    | experimental      | 8      |
    | ambient           | 7      |
    | emo-violence      | 6      |
    | death-metal       | 5      |
    | pop-punk          | 5      |
    | swedish           | 3      |
    | psychedelic       | 3      |
    | pop               | 2      |
    | polish            | 2      |
    | punk-rock         | 1      |
    | acoustic          | 1      |
    | post-punk         | 1      |
    +-------------------+--------+
