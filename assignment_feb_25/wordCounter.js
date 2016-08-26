$(document).ready(function(){

  $('#input').on('keyup', function(){
    var input = $('#input').val();

    input = input.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    input = input.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    input = input.replace(/\n /,"\n"); // exclude newline with a start spacing

    var words = input.split(" ");
    var sentences = input.split(/[\.\?\!][\sa-zA-Z]/);

    for(var i = 0; i < sentences.length; ++i){
      console.log(sentences[i]);
      if (sentences[i] === undefined){
        sentences.splice(i, 1);
      }
    }
    if(!input){
      $('#words-count').html(0);
      $('#char-count').html(0);
      $('#sentence-count').html(0);
    }
    else{
      $('#words-count').html(words.length);
      $('#char-count').html(input.length);
      $('#sentence-count').html(sentences.length);
    }
  });
});
