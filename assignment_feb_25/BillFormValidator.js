$(document).ready(function(){

  $('#button').on('click', function(e){
    e.preventDefault();

    var postalCode = $('#postal-code').val().toUpperCase();
    $('#postal-code').val(postalCode);

    if(postalCode.match(/^[A-Z]\d[A-Z]\s?\d[A-Z]\d\s*$/)){
      console.log('matched!');
    }

  });

});
