$(document).ready( function() {

  $.getJSON("https://api.github.com/repos/theGPDteam/ProjetRPG/branches/master")
    .done(function( data ){
      $("#commit-message").text( data.commit.commit.author.name );
      $("#commit-title").text( data.commit.commit.message );
      $("#commit-link").attr("href", data.commit.html_url );
    });

  $.get("https://raw.githubusercontent.com/TheGPDteam/thegpdteam.github.io/master/actualite/derniere-actualite.md")
  .done(function(data){
    div = $("#content");
    var converter = new showdown.Converter();
    text      = data;
    div.html(converter.makeHtml(text));
  });

});
