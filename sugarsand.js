$( document ).ready(function() {
    console.log( "ready!" );
    $('.main_opc').hover(function(){
		$(this).find('.sub_menu').show();
    }, function(){
    	$(this).find('.sub_menu').hide();
    });
 
});


console.log( "ready!" );