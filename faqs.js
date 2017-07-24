$(document).ready(function() {
    $("#faqs h2").click(function(){
        $(this).toggleClass("minus");
        if($(this).attr("class") != "minus") {
            //$(this).next().hide();
            //$(this).next().fadeOut(1000);
            $(this).next().stop(true).slideUp(1000, "easeInBounce");
        }
        else {
            //$(this).next().show();
            //$(this).next().slideDown(2000);
            $(this).next().stop(true).slideDown(1000, "easeOutBounce");
        }
        //$(this).next().slideToggle(1000);
    });

    // runs when the page is ready
    /* $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1000 ); */
		    
	// runs when the top-level heading is clicked
	/* $("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			   .animate( { fontSize: "175%", left: "-=200" }, 1000 );
	}); // end click

    */
    $("#faqs h1").animate({fontSize:"275%", opacity:1, left:0}, 
        2000,
        function(){
            $("#faqs h2").next().fadeIn(1000).fadeOut(1000);
        });

    $("#faqs h1").click(function(){
        $(this).animate({fontSize:"650%",opacity:1,left:"+=275"},
        2000, "easeInExpo",
        function(){
            $(this).animate({fontSize:"175%",left:"-=275"},2000);
        }).animate({fontSize:"175%",left:"-=275"},1000,"easeOutExpo");
    });
});//end ready