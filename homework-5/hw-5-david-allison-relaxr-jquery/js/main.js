$(document).ready(function(){


  $(".relaxr-CTA-button").click(function(event){
    event.preventDefault();
    // $(".relaxr-CTA-container");
    // .append("Submissions"+ "not"+"accepted");
    // .appendTo("relaxr-CTA-container");

    // alert("Submissions not accepted at this time");
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


  //
  //
  //
  // $("#readLessContainer2").click(function(){
  //   $(".relaxr-blog-overflow-2").toggleClass("overflow-inherit");
  //   // $(".relaxr-blog-maincontent-link-readLess-container").toggleClass(".flex");
  //   $(".relaxr-CTA-container").css({ "margin-top": "100px" });
  //   $("#readMoreContainer2").show();
  //   $("#readMore2").show();
  //   $("#readLessContainer2").toggleClass("flex");
  //   $("#readLess2").hide();
  //
  // });
  //
  // $("#readMoreContainer1").click(function() {
  //   //  alert("working");
  //   $(".relaxr-CTA-container").css({ "margin-top": "500px" });
  //   // $(".relaxr-blog-maincontent-link").hide();
  //   $("#readMore1").hide();
  //   $("#readMoreContainer2").hide();
  //   // $(".relaxr-blog-maincontent-link-container").hide();
  //   $(".relaxr-blog-maincontent-link-readLess").show();
  //   $(".relaxr-blog-maincontent-link-readLess-container").toggleClass(".flex");
  //   // $(".relaxr-blog-overflow-2").slideDown();
  //   $(".relaxr-blog-overflow-1").toggleClass("overflow-inherit");
  //   // $(".relaxr-blog-overflow-1").slideUp();
  // });
  //


});
