#= require jquery
#= require_tree .
#= require_self

$(->
    $.getJSON "https://api.github.com/users/knoopx/repos?type=owner&sort=updated&callback=?", (response) ->
      $.each response.data ->
        $("ul#github").append $("<li>").append($("<a>").text(@name).attr("href", @html_url).after($("<p>").text(@description)))

    $.getJSON "http://api.twitter.com/1/statuses/user_timeline/knoopx.json?callback=?", (tweets) ->
      $.each tweets, ->
        $("ul#tweets").append $("<li>").text(@text)
  )