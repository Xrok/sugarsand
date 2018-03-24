$( document ).ready(function() {
    console.log( "ready!" );

    $('.main_opc').hover(function(){
		$(this).find('.sub_menu').show();
    }, function(){
    	$(this).find('.sub_menu').hide();
    });
 
    $('.mini').click(function(e){
    	e.preventDefault();
    	var year = $(this).data('year');
    	var num = $(this).data('number');
    	var new_bg = '<img src="../imagenes/'+year+'_'+num+'.jpg">';
    	$(this).closest('.contenido').find('.show').html(new_bg);
    	$('html,body').animate({scrollTop: $('.show').offset().top},'fast');
    })
$('#whatsapp').click(function(){
        alert('Contáctanos a nuestro celulares:  9879798798');
    });
});


console.log( "ready!" );