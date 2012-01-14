#= require jquery
#= require_tree .
#= require_self

$(->
    $.getJSON "http://github.com/api/v2/json/repos/show/knoopx?callback=?", (data) ->
      $.each data.repositories.reverse(), ->
        $("ul#github").append $("<li>").append($("<a>").text(@name).attr("href", @url).after($("<p>").text(@description))) unless @fork

    $.getJSON "http://api.twitter.com/1/statuses/user_timeline/knoopx.json?callback=?", (tweets) ->
      $.each tweets, ->
        $("ul#tweets").append $("<li>").text(@text)
  )