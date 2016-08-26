var LIBRARY = [
  {title: 'C Major Scale', notes: 'A B C D E F G' },
  {title: 'Chromatic Scale', notes: 'A A# B C C# D D# E F F# G G#' },
  {title: 'Random Song', notes: 'A B*2 C D A*4 D E*2 F A B A A*2' },
  {title: 'Adup Licate', notes: 'A B*2 C D A*4 D E*2 F A B A A*2' },
  {title: 'Yankee Doodle', notes: 'C F*4 C F*4 B C D A*2 B*2 A B*2 C' },
  {title: 'Descending Notes', notes: 'G F E D C B A G F E D C B A' }
];

var BPM = 600;

// Add a song with the given title and notes to the library.
var addSongToLibrary = function(title, notes) {
  $('#library-list').append("<li>" +
  "<i class='fa fa-bars'></i>" +
  "<i class='fa fa-trash'></i>" +
  "<span class='title'>" + title + "</span>" +
  "<div class='notes'>" + notes + "</div>" +
  "</li>");
};


// Add all LIBRARY songs to the library.
var initializeLibrary = function() {
  for(var i=0; i < LIBRARY.length; i+=1) {
    addSongToLibrary(LIBRARY[i].title, LIBRARY[i].notes);
  }
};


// Play all songs in the playlist.
var playAll = function() {

  // Grab the top song in the queue, parse its notes and play them.
  // Then recurse until there are no more songs left in the queue.
  //
  var playNext = function() {
    var songItem = $('#playlist-list li:first-child');

    if (songItem.length === 0) {
      // No more songs.
      $('.page-header').removeClass('animated rotateIn');
      // Re-enable the play button.
      $('#play-button').attr('disabled', false).text('Play All');

      // Fade out the message.
      $('#message').fadeOut();
      return;
    }

    var title = songItem.find('.title').text();
    var notes = songItem.find('.notes').text();
    var song = parseSong(notes);

    $('#message').html("Now playing: <strong>" + title + "</strong>").show();

    playSong(song, BPM, function() {
      songItem.remove();
      $('#library-list').append(songItem);
      playNext();
    });
  };

  // Disable the play button to start.
  $('#play-button').attr('disabled', true).text('Playing');

  playNext();
}


$(document).ready(function() {
  // Initialize the library with some songs.
  initializeLibrary();

  $('.notes').hide();

  $('#message').fadeIn(800);
  setTimeout(function(){
    $('#message').fadeOut(800);
  }, 3000);

  // Play all songs in the playlist when the "play" button is clicked.
  $('#play-button').on('click', function(){
    if($('#playlist-list li').length === 0){
      console.log('empty');
      //  $(this).effect( "shake",{ distance: 1, times:3 }, 2000 );

      $(this).toggleClass('animated shake', function(){

      });
    }
    else{
      $('.page-header').addClass('animated jello');
      console.log('play!!');
      playAll();
    }
  });

  // Add Your Code Here.
  $('.fa-trash').on('click', function(){
    var parent = $(this).parent();
    parent.slideUp(500, function(){
      parent.remove();
    });
  });



  $(document).on('dblclick', 'li',function(){
    if (!$(this).hasClass('expanded')){
      $(this).children('div').slideDown(300);
      $(this).addClass('expanded');
    }
    else{
      $(this).children('div').slideUp(300);
      $(this).removeClass('expanded');
    }
  });

  $('li').hover(function(){
    $(this).toggleClass('animate');
    $('li:hover .fa-trash').toggleClass('animate');
  });

  $("#library-list").sortable({ connectWith: "#playlist-list" });
  $("#playlist-list").sortable({ connectWith: "#library-list" });

  $('#filter-library').keyup(function(){
    var text = $('#filter-library').val().toLowerCase();
    if(text){
      // console.log(text);
      $('li').filter(function(index){
        $(this).hide();
        return $(this).children('span').html().toLowerCase().includes(text);
      }).show();
    }
    else{
      $('li').show();
    }
  });

});
