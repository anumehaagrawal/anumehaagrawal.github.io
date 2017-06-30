
    $(document).ready(function () {
    	 

          
        $(".card").hide();
        $(".card").delay(2000).fadeIn(100);  
         $("#mylife").hide();
        $("#mylife").delay(2000).fadeIn(100);
        $('.materialboxed').hide();
        $(".materialboxed").delay(2000).fadeIn(100);
        $('.materialboxed').materialbox();
        $('.counter').each(function () {
	    		$(this).prop('Counter',0).animate({
	        		Counter: $(this).text()
	    }, {
	        duration: 9000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});

    	
    	 $(document).scroll(function() {
		var $nav = $('.navbar-fixed');
      	$nav.find('nav').toggleClass('purple', $(this).scrollTop() > $nav.height());
    	$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
    
});
    	 $("#mylife").vegas({
		slides: [
			{ src: "images/cover1.jpg" },
			{ src: "images/cover2.jpg" },
			{ src: "images/cover3.jpg" },
			{ src: "images/cover4.JPG" },
			
		],
		
		animation: 'kenburnsUpLeft',
		transition: 'swirlRight'
		
	});
   $('#bottom').hide();
   $("#bottom").delay(3200).fadeIn(100);
   $('.tap-target').hide();
   $(".tap-target").delay(3200).fadeIn(100); 


});
