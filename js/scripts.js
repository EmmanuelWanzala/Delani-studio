$(document).ready(function() {
  $(".design").click(function(event) {
    $(".hide").slideToggle();
    $(".show").slideToggle();


  });
  /*display and hive development content*/
  $(".development").click(function(event) {
    $(".show1").slideToggle();
    $(".hide1").slideToggle();
  });

  $(".product").click(function(event) {
    $(".show2").slideToggle();
    $(".hide2").slideToggle();
  });
  $("button").click(function(event) {
    alert("Message Sent");
    event.preventDefault();

  });
  //



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
