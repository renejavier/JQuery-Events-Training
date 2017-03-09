console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  // function compute() {
  //   if ( $('input[name=type]:checked').val() != undefined ) {
  //       var a = parseInt($('#left').val());
  //       var b = parseInt($('#right').val());
  //       var total = a+b;
  //       $('#total').val(a+b);
  //   }

  $("input").keyup(function(){
  var a = parseInt($('#left').val());
    var b = parseInt($('#right').val());
        total = a + b;
    $('#total').val(total);

})


})
