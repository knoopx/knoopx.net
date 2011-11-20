#= require jquery
#= require jquery.pjax
#= require_tree .
#= require_self

$(->
    $('a[data-pjax]').pjax({container:"#content", fragment:"#content"})
    $.getJSON "http://github.com/api/v2/json/repos/show/knoopx?callback=?", (data) ->
      $.each data.repositories, ->
        $("ul#github").append $("<li>").append($("<a>").text(@name).attr("href", @url).after($("<p>").text(@description))) unless @fork

    $.getJSON "http://api.twitter.com/1/statuses/user_timeline/knoopx.json?callback=?", (tweets) ->
      $.each tweets, ->
        $("ul#tweets").append $("<li>").text(@text)
  )