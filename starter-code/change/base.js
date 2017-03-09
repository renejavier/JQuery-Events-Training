console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input").keyup(function(){
  var a = parseInt($('#left').val());
    var b = parseInt($('#right').val());
    var total = a + b;
    $('#total').val(total);

})


})
