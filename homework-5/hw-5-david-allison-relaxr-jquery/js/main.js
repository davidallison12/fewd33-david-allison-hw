$(document).ready(function(){


  $(".relaxr-CTA-button").click(function(event){
    event.preventDefault();

    alert("Submissions not accepted at this time");
  });



//If you click read more on the first blog then the 'readmore' text will hide and read less will appear. The content will also slide down to acces the rest of the blog post.

  $("#readMore1").click(function(event){
    event.preventDefault();

    $("#readMore1").hide();
    $("#readLess1").show();
    $(".extraText1").slideDown();
  });



// If you click the 'readless button'/ The 'readless' button hides away, The 'readmore' button appears and the extra blog content slides up

  $("#readLess1").click(function(event){
    $('#readMore1').show();
    $('#readLess1').hide();
    $('.extraText1').slideUp();
  });




// Same thing different blog

  $("#readMore2").click(function(event) {
    event.preventDefault();

    $("#readMore2").hide();
    $("#readLess2").show();
    $(".extraText2").slideDown();

  });


  $("#readLess2").click(function(event) {
    event.preventDefault();

    $("#readLess2").hide();
    $("#readMore2").show();
    $(".extraText2").slideUp("slow");

  });





});
