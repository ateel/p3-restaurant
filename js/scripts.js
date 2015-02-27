$( document ).ready(function() {
    console.log( "ready!" );
});

$(function() {                       
  $("#RawFish").click(function() {  
    $("section:not(.raw)").addClass("fadey");      
  });
});


$(function() {                       
  $("#SpicyLink").click(function() {  
    $("section:not(.spicy)").addClass("fadey");      
  });
});

$(function() {                       
  $("#VeggieFood").click(function() {  
    $("section:not(.veg)").addClass("fadey");      
  });
});