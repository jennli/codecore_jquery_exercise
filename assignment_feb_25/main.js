$(document).ready(function() {

  $('#btn-inc').on('click', function(){
    // console.log('hello');
    $('body').each(function(){
      var k =  parseInt($(this).css('font-size'));
      var newSize = k+1;
      $(this).css('font-size',newSize+'px');
    });
  });

  $('#btn-dec').on('click', function(){
    // console.log('hello');
    $('body').each(function(){
      var k =  parseInt($(this).css('font-size'));
      var newSize = k-1;
      $(this).css('font-size',newSize+'px');
    });
  });

});
