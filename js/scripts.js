$("#RawFish").click(function () {
 
	  $('.spicy').hide();
	  $('.veg').hide();
	  $('.allitems').hide();
	  $('.raw').show();
 
    });

$("#SpicyLink").click(function () {
 
	  $('.raw').hide();
	  $('.veg').hide();
	  $('.allitems').hide();
	  $('.spicy').show();
 
    });

$("#VeggieFood").click(function () {
 
	  $('.raw').hide();
	  $('.spicy').hide();
	  $('.allitems').hide();
	  $('.veg').show();
 
    });


$("#All").click(function () {
 
	  $('.raw').show();
	  $('.spicy').show();
	  $('.veg').show();
	  $('.allitems').show();
 
    });