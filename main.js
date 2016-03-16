/*funciones click primera pantalla*/
$(document).ready(function(){
	$('#img4').click(function(){
		$("#img4").removeClass("latido"); 
		$("#img3").show("slow");
		$("#img3").addClass("zoom"); 			 		
	});
	$('#img3').click(function(){
		$("#padre-h1-c1").show("slow");	
		$("#img1").addClass("latido");	 		
	});
	$('#img1').click(function(){
		$("#img1").removeClass("latido"); 
		$("#padre-h1").show("slow");
		$("#img5").addClass("zoom");
		$("#img6").addClass("zoom");	 		
	});

});

$(document).ready(function(){
	$('#img8').click(function(){
		$("#img10contenedor").show("slow");
		$("#img101").addClass("latido");
		$("#img102").addClass("latido");				 		
	});
	$('#img101').click(function(){
		$("#img101").removeClass("latido");
		$("#img102").show("slow");	 		
	});
	$('#img102').click(function(){
		$("#img102").removeClass("latido");
		$("#img101").hide("slow");
		$("#img102").hide("slow");
		$("#img10contenedor").addClass("latido"); 		
	});

	
});




$(document).ready(function(){
	$('#simg').click(function(){
		$("#oculto2").show("slow");
		$("#simg").removeClass("latido");				 		
	});

});

$(document).ready(function(){
	$('#enchufe').click(function(){
		$("#enchufe").removeClass("latido");	
		$("#enchufe").css("background-image","url(./img/img71.png)");			 		
	});

});


  $(document).ready(function(){
        $('#cascada').click(function(){
            /*Ocultar escenas excepto la 2*/
             $("#cascada").removeClass("latido");
             $("#cascada").css("z-index","-1");
             $("#cas1").show("slow");
             $("#cas4").show("slow");
           	 $('#cas1,#cas4').click(function(){
            /*Ocultar escenas excepto la 2*/
	             $("#cas1,#cas4").removeClass("latido");
	             $("#cas1,#cas4").css("z-index","-1");
	             $("#cas2,#cas3").css("z-index","0");
	             $("#cas2").show("slow");
	             $("#cas3").show("slow");
	              $(".pa4-h1-tur").css("visibility", "visible");
            		$(".pa4-h1-tur").fadeTo(1000,1); 
	          
	             
               
           
        });    
           
        });
    });



