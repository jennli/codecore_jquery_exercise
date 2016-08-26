$(document).ready( function(){

  $("#show-password").change(function(){
    var i = this.checked? 'password':'text';
    $('#password').attr('type', i);
  });

  $("#password").on('keyup', function(){
    var result = 0;
    var input = $("#password").val();
    var output = "";

    // It has at least one lower case character
    if(input.match(/[a-z]/)){
      result +=1;
    }
    // It has at least one upper case character
    if (input.match(/[A-Z\d]/)){
      result +=1;
    }
    // It has at least one non alphanumeric character
    if(input.match(/\W\S/g)){
      result +=1;
    }

    // It has more than 8 characters
    if(input.length > 8){
      result += 1;
    }
    // It has more than 12 characters
    if(input.length > 12){
      result +=1;
    }

    // password, 123456, 12345678, admin, master, 111111
    if(input.match(/^(123456|12345678|admin|master|111111)$/)){
      result = 0;
    }

    switch(result){
      case 1:
      output="<p style='color:red;'>weak</p>";
      break;

      case 2:
      output="<p style='color:brown;'>meh meh</p>";
      break;

      case 3:
      output="<p style='color:purple'>good</p>";
      break;

      case 4:
      output="<p style='color:green'>strong</p>";
      break;

      case 5:
      output="<p style='color:lightgreen'>awesome</p>";
      break;

      default:
      if(input){
        output="Are you kidding me?";
      }
      else{
        output ="";
      }
    }
    $('#strength').html(output);

  });
});
