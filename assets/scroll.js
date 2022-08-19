$(document).on("scroll", function () {
  var pixelsFromTop = $(document).scrollTop();

  if (pixelsFromTop > 80) {
    $("header").addClass("hidden");
  } else {
    $("header").removeClass("hidden");
  }
 

  if (pixelsFromTop < 600){

    $("body").css("background-color","#fff")
} else if (pixelsFromTop < 1400){

  $("body").css("background-color","#a29c97")

} else if (pixelsFromTop < 2200){

  $("body").css("background-color","#d9dfe4")

}  else if (pixelsFromTop < 3000){

  $("body").css("background-color","#fff0f0")
  

} else {

  $("body").css("background-color","#cdccc7")

}




var documentHeight= $(document).height()
var wimdowHeight= $(window).height()

var difference= documentHeight-wimdowHeight

var percentage= 100 * pixelsFromTop / difference




$(".bar").css("width",percentage + "%")



});


