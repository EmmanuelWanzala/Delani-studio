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
//  $("button").click(function (event) {
//   var popUp = document.getElementById('nameDetail').value();
//   alert( + popUp + ' we have received your message . ' + ' Thank you for reaching out to us.');
//   event.preventDefault();
// });
// //    reset my form button
// $("button").on('click', function () {
//   $('form').each(function () {
//     this.reset();
//   });
// });




// $(document).ready(function() {
//   $(".design").click(function(event) {
//     $("#hide1").slideToggle();
//     $(".show").slideToggle();

//   });
//   });
  
//   $(".development").click(function(event) {
//     $("#hide2").slideToggle();
//     $("show1").slideToggle();
//   });

//   $(".product").click(function(event) {
//     $(".show2").slideToggle();
//     $("#hide3").slideToggle();
//   });
//   $("button").click(function(event) {
//     alert("Thank you for the message");
//     event.preventDefault();
//   });
  

// $("#one").hover(function(){
//    $("#1").removeClass("four")
//      $("#1").addClass("light")
//  },function(){
//    $("#1").removeClass("light")
//    $("#1").addClass("four")

//  })

//  $("#two").hover(function(){
//    $("#2").removeClass("four")
//      $("#2").addClass("light")
//  },function(){
//    $("#2").removeClass("light")
//    $("#2").addClass("four")

//  })

//  $("#three").hover(function(){
//    $("#3").removeClass("four")
//      $("#3").addClass("light")
//  },function(){
//    $("#3").removeClass("light")
//    $("#3").addClass("four")

//  })

//  $("#four").hover(function(){
//    $("#4").removeClass("four")
//      $("#4").addClass("light")
//  },function(){
//    $("#4").removeClass("light")
//    $("#4").addClass("four")

//  })

//  $("#five").hover(function(){
//    $("#5").removeClass("four")
//      $("#5").addClass("light")
//  },function(){
//    $("#5").removeClass("light")
//    $("#5").addClass("four")

//  })

//  $("#six").hover(function(){
//    $("#6").removeClass("four")
//      $("#6").addClass("light")
//  },function(){
//    $("#6").removeClass("light")
//    $("#6").addClass("four")

//  })

//  $("#seven").hover(function(){
//    $("#7").removeClass("four")
//      $("#7").addClass("light")
//  },function(){
//    $("#7").removeClass("light")
//    $("#7").addClass("four")

//  })

//  $("#eight").hover(function(){
//    $("#8").removeClass("four")
//      $("#8").addClass("light")
//  },function(){
//    $("#8").removeClass("light")
//    $("#8").addClass("four")

//  })
// });
// // $("button").click(function (event) {
// //   var client = document.getElementById('nameDetail').value;
// //   alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
// //   event.preventDefault();
// // });
  