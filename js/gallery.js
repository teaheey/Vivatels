$( document ).ready(function() {  
    
    $( ".menu label" ).click(function() {
        //all photos selected
       if($(this).data('type') == 'all')
       {
        $('.gallery a').show();
       } else {
        //hide all photos
        $('.gallery a').hide();
        //show selected category photos (by class and data-type attributes)
        $('.gallery').find('.' + $(this).data('type')).show();

       }

    });
    
});

