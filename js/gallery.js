$( document ).ready(function() {  

    $( ".menu label" ).mouseenter(function() {
        $(this).css('color', 'white');
     });

     $( ".menu label" ).mouseleave(function() {
        $(this).css('color', 'black');
     });

    $( ".menu label" ).click(function() {

       /*
            making transitions between gallery sections responsive
       */
        //all photos selected
       if($(this).data('type') == 'all')
       {
        $('.menu label').css('text-decoration', 'none');
        $('.menu label').css('font-size', '15px');
        $(this).css('text-decoration', 'underline #ff4f5a 3px');
        $(this).css('font-size', '18px');
        //show all photos
        $('.gallery a').fadeOut();
        $('.gallery a').fadeIn("slow");
       } else {
        //hide all photos
        $('.gallery a').fadeOut("slow");
        //show selected category photos (by class and data-type attributes)
        $('.gallery').find('.' + $(this).data('type')).fadeIn("slow");
        //style selected gallery section
        $('.menu label').css('text-decoration', 'none');
        $('.menu label').css('font-size', '15px');
        $(this).css('text-decoration', 'underline #ff4f5a 3px');
        $(this).css('font-size', '18px');
       }

    });
    
});

