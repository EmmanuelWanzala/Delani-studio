$(document).ready(function() {
  $(".design").click(function(event) {
    $("#hide1").slideToggle();
    $(".show").slideToggle();


  });
  
  $(".development").click(function(event) {
    $(".show1").slideToggle();
    $("#hide2").slideToggle();
  });

  $(".product").click(function(event) {
    $(".show2").slideToggle();
    $("#hide3").slideToggle();
  });
  
  

$("#one").hover(function(){
   $("#1").removeClass("four")
     $("#1").addClass("light")
 },function(){
   $("#1").removeClass("light")
   $("#1").addClass("four")

 })

 $("#two").hover(function(){
   $("#2").removeClass("four")
     $("#2").addClass("light")
 },function(){
   $("#2").removeClass("light")
   $("#2").addClass("four")

 })

 $("#three").hover(function(){
   $("#3").removeClass("four")
     $("#3").addClass("light")
 },function(){
   $("#3").removeClass("light")
   $("#3").addClass("four")

 })

 $("#four").hover(function(){
   $("#4").removeClass("four")
     $("#4").addClass("light")
 },function(){
   $("#4").removeClass("light")
   $("#4").addClass("four")

 })

 $("#five").hover(function(){
   $("#5").removeClass("four")
     $("#5").addClass("light")
 },function(){
   $("#5").removeClass("light")
   $("#5").addClass("four")

 })

 $("#six").hover(function(){
   $("#6").removeClass("four")
     $("#6").addClass("light")
 },function(){
   $("#6").removeClass("light")
   $("#6").addClass("four")

 })

 $("#seven").hover(function(){
   $("#7").removeClass("four")
     $("#7").addClass("light")
 },function(){
   $("#7").removeClass("light")
   $("#7").addClass("four")

 })

 $("#eight").hover(function(){
   $("#8").removeClass("four")
     $("#8").addClass("light")
 },function(){
   $("#8").removeClass("light")
   $("#8").addClass("four")

 })
});


$("button").click(function (event) {
  var popUp = document.getElementById('nameDetail').value;
  alert("Hello " + popUp + " we have received your message.Thank you for reaching out to us "  );
  event.preventDefault();
});

