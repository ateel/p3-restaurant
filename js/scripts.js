$("#RawFish").click(function () {
 
	  $('.spicy').removeClass('fadeyspice');
	  $('.veg').removeClass('fadeyveg');
	  $('.raw').addClass('fadeyraw');
 
    });

$("#SpicyLink").click(function () {
 
	  $('.raw').removeClass('fadeyraw');
	  $('.veg').removeClass('fadeyveg');
	  $('.spicy').addClass('fadeyspice');
 
    });

$("#VeggieFood").click(function () {
 
	  $('.raw').removeClass('fadeyraw');
	  $('.spicy').removeClass('fadeyspice');
	  $('.veg').addClass('fadeyveg');
 
    });