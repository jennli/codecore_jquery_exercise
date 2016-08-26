$(document).ready(function(){

  var sumFunction = function(arr){
    var result = 0;
    for(var i = 0; i < arr.length; ++i){
      var value = parseInt(arr[i]);
      result += value;
    }
    return result;
  };

  var productFunction = function(arr){
    var result = 1;
    for(var i = 0; i < arr.length; ++i){
      var value = parseInt(arr[i]);
      result *= value;
    }
    return result;
  };

  var avgFunction = function(arr){
    var result = 0;
    for(var i = 0; i < arr.length; ++i){
      var value = parseInt(arr[i]);
      result += value;
    }
    return (result/arr.length) ;
  };

  $('#start').on("click", function(){
    $('#result').empty ();

    var input = prompt('Please enter some numbers');
    var array = input.split(" ");
    var sum = sumFunction(array);
    var product = productFunction(array);
    var avg = avgFunction(array);


    $('#result').append('<p> Sum: ' + sum + "</p>");
    $('#result').append('<p> Product: ' + product + "</p>");
    $('#result').append('<p> Average: ' + avg + "</p>");
    $('#result').append("<hr>");

  });

});
