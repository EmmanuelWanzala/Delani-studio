$(document).ready(function() {
  $(".design").click(function(event) {
    $(".hide").slideToggle();
    $(".show1").slideToggle();


  });
 
  $(".development").click(function(event) {
    $(".show2").slideToggle();
    $(".hide1").slideToggle();
  });

  $(".product").click(function(event) {
    $(".show3").slideToggle();
    $(".hide2").slideToggle();
  });
  $("button").click(function(event) {
    alert("Hello, ");
    event.preventDefault();

  });
  
 
  
  
  $("#work1").hover(function(){
    $("#1").removeClass("work")
      $("#1").addClass("sleep")
  },function(){
    $("#1").removeClass("sleep")
    $("#1").addClass("work")
 
  })
 
  $("#work2").hover(function(){
    $("#2").removeClass("work")
      $("#2").addClass("sleep")
  },function(){
    $("#2").removeClass("sleep")
    $("#2").addClass("work")
 
  })
 
  $("#work3").hover(function(){
    $("#3").removeClass("work")
      $("#3").addClass("sleep")
  },function(){
    $("#3").removeClass("sleep")
    $("#3").addClass("work")
 
  })
 
  $("#work4").hover(function(){
    $("#4").removeClass("work")
      $("#4").addClass("sleep")
  },function(){
    $("#4").removeClass("sleep")
    $("#4").addClass("work")
 
  })
 
  $("#work5").hover(function(){
    $("#5").removeClass("work")
      $("#5").addClass("sleep")
  },function(){
    $("#5").removeClass("sleep")
    $("#5").addClass("work")
 
  })
 
  $("#work6").hover(function(){
    $("#6").removeClass("work")
      $("#6").addClass("sleep")
  },function(){
    $("#6").removeClass("sleep")
    $("#6").addClass("work")
 
  })
 
  $("#work7").hover(function(){
    $("#7").removeClass("work")
      $("#7").addClass("sleep")
  },function(){
    $("#7").removeClass("sleep")
    $("#7").addClass("work")
 
  })
 
  $("#work8").hover(function(){
    $("#8").removeClass("work")
      $("#8").addClass("sleep")
  },function(){
    $("#8").removeClass("sleep")
    $("#8").addClass("work")
 
  })
 
 
 });
