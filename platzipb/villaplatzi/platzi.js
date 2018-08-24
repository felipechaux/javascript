
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup",teclado);

/*
var z;

for (var i =0; i< 10; i++) {
	z=aleatorio(1,5);
	document.write(z+",");
}*/


var vp=document.getElementById("villa");
var papel=vp.getContext("2d");

var fondo={
	url:"tile.png",
	cargaOK:false
};

var vaca={
	url:"vaca.png",
	cargaOK:false
};

var pollo={
	url:"pollo.png",
	cargaOK:false
}

var cerdo={
  url:"cerdo.png",
  cargaOK:false
}

var cantidad=aleatorio(5,20);


fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);


/*
var cerdo=new Image();
cerdo.src="cerdo.png";
cerdo.addEventListener("load",cargarCerdos);

var pollo=new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",cargarPollos);
*/

var xx=0;
var yy=0;


function teclado(evento)
{
    var color="blue"; 
    var movimiento=5;
    

  switch(evento.keyCode)
  {

      case teclas.UP:
     // y-=movimiento;
      console.log("vamo pa arriba");
      papel.drawImage(cerdo.imagen,xx,yy-movimiento);
      yy-=movimiento;

      break;
      case teclas.DOWN:
      console.log("vamo pa abajo");
      papel.drawImage(cerdo.imagen,xx,yy+movimiento);
      yy+=movimiento;
      break;
      case teclas.LEFT:
      papel.fillRect(0, 0, 300, 150);
      
      console.log("vamo pa izquierda");
      papel.drawImage(cerdo.imagen,xx-movimiento,yy);
      xx-=movimiento;
      break;
      case teclas.RIGHT:
      papel.fillRect(0, 0, 300, 150);

      console.log("vamo pa derecha");
      papel.drawImage(cerdo.imagen,xx+movimiento,yy);
      xx+=movimiento;

       // x+=movimiento;
      break;
      default:
      console.log("otra tecla");
      break;
  }

//console.log("tecla oprimida");
console.log(evento.keyCode);
}

function cargarFondo(){

 fondo.cargaOK=true;
 dibujar();
}
function cargarVacas(){

 vaca.cargaOK=true;
  dibujar();
}

function cargarPollos(){

 pollo.cargaOK=true;
  dibujar();
}

function cargarCerdos(){

 cerdo.cargaOK=true;
  dibujar();
}

function dibujar(){


	if(fondo.cargaOK){

    	papel.drawImage(fondo.imagen,0,0);

	}
   if(vaca.cargaOK){


       console.log(cantidad);

   	   for (var i = 0; i < cantidad; i++) {
   	   	

   	    var x=aleatorio(0,7);
   	    var y=aleatorio(0,7);
		
         x*=60;
         y*=60;

    	papel.drawImage(vaca.imagen,x,y);


   	   }

	}

	if(pollo.cargaOK){


		for (var i = 0; i < cantidad; i++) {
   	   	

   	     var x=aleatorio(0,7);
         var y=aleatorio(0,7);
		
         x*=60;
         y*=60;

       papel.drawImage(pollo.imagen,x,y);

   	   }

	}

  if(cerdo.cargaOK){

 papel.drawImage(cerdo.imagen,0,0);

  for (var i = 0; i < cantidad; i++) {
        

        var x=aleatorio(0,7);
        var y=aleatorio(0,7);
    
         x*=60;
         y*=60;

       papel.drawImage(cerdo.imagen,x,y);

       }


  }
}

function aleatorio(min,max){

   var resultado;

   resultado=Math.floor	(Math.random()*(max-min+1))+min;


  return resultado;

}