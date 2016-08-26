$(document).on('ready', function() {
  // function fixStuff() {
  //   $('*').css('transform', ('rotate(' + (Math.random() * 100) + 'deg)'));
  // }
  // setInterval(fixStuff, 200);
  // promptAndPlay
  //
  // Prompts the user to enter a song.
  // Plays the entered song.
  // Repeats when the song is complete.
  //
  var promptAndPlay = function() {
    var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");

    if (songString){
      $('#play-button').html('playing...');
      $('#play-button').attr('disabled', true);

      var song = parseSong(songString);

      playSong(song, 500, resumePlayButton);
    }
  };

  var resumePlayButton = function(){
    $('#play-button').attr('disabled', false);
    $('#play-button').html('Play');
  }

  $('#play-button').on('click', function(){
    promptAndPlay();
  });

});
