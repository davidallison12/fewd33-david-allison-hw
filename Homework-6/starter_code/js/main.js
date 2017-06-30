// if ("#city-type" === NYC){
//   $("body").css(.)
// }



$("#submit-btn").click(function(){
  event.preventDefault();
  $("body").removeClass();
  var city = $("#city-type").val().toLowerCase();
  if(city == "new york" || city == "nyc") {
    // $("body").removeClass();
    $("body").addClass("nyc");
    console.log(city);
  }

  else if (city == "sf" || city == "bay area" || city == "san francisco") {
      $("body").removeClass("nyc").addClass("sf");
      console.log(city);
  }

  else if(city == "la" || city =="lax" || city =="los angeles"){
    $("body").removeClass("nyc"&&"sf").addClass("la");
    console.log(city);
}
  else if(city =="austin" || city =="atx"){
    $("body").removeClass("nyc"&&"sf"&&"la").addClass("austin");
    console.log(city);
  }
  else if(city == "sydney" || city =="syd"){
    $("body").removeClass("nyc"&&"sf"&&"la"&&"austin").addClass("sydney");
    console.log(city);
  }
  var form = document.getElementById('city-form');
  form.reset();
});
