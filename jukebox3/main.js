$(document).ready(function() {
  var myFreq = 1000;

  //my play function for playing song and append name + note
  var myPlayFunction = function(song, name){
    $('#song-title').remove();
    $('.page-header').append('<h5 id="song-title"> Now playing '+ name + '</h5>' );
    var songString = parseSong(song);
    playSong(songString, 400, onComplete);
    $('#song-queue').children().first().remove();
  }

  $('form').on("submit", function(event){
    event.preventDefault();
    var songName = $("input[name='song-name']").val();
    var notes = $("input[name='notes']").val();

    $("#song-queue").append("<li><p class='song-name'>" + songName + "</p>" + "<p class='song-notes'>" + notes + "</p></li>");
    $("input[type='text']").val('');
    $(".song-notes").hide();
  });

  // show song notes
  $('ul').on('mouseenter', '.song-name', function(){
    $(this).parent().children('.song-notes').fadeIn(100);
  });

// hide song notes
  $('ul').on('mouseleave', '.song-name', function(){
    $(this).parent().children('.song-notes').fadeOut(100);
  });

//allow play when hitting spacebar
  $(document).on('keypress', function(e){
    var tag = e.target.tagName.toLowerCase();
    if ( e.which === 32 && tag !== 'input') {
      $('#play-button').click();
    }
  });

  // click play button
  $(document).on('click', '#play-button', function(event){
    var song = $('#song-queue li:first p.song-notes').html();
    var name = $('#song-queue li:first p.song-name').html();

    if (song){
      $('#play-button').slideUp(myFreq);
      myPlayFunction(song, name);
    }
  });

  // call back
  var onComplete = function() {

    var song = $('#song-queue li:first p.song-notes').html();
    var name = $('#song-queue li:first p.song-name').html();

    if (song){
      $('#play-button').slideUp(myFreq);
      myPlayFunction(song, name);
    }
    else{
      $('#play-button').slideDown(myFreq);
      $('#song-title').html("Enter a song to play");
    }
  }

});
