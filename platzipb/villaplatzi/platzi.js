
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown",teclado);

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


var xx=0;
var yy=0;

var vx=[];
var vy=[];

var px=[];
var py=[];

var cx=[];
var cy=[];


function teclado(evento)
{
    var color="blue"; 
    var movimiento=60;

  switch(evento.keyCode)
  {

      case teclas.UP:
      refrescar();
      console.log("vamo pa arriba");
      papel.drawImage(cerdo.imagen,xx,yy-movimiento);
      yy-=movimiento;

      break;
      case teclas.DOWN:
      refrescar();
      console.log("vamo pa abajo");
      papel.drawImage(cerdo.imagen,xx,yy+movimiento);
      yy+=movimiento;
      break;
      case teclas.LEFT:
      refrescar();
      console.log("vamo pa izquierda");
      papel.drawImage(cerdo.imagen,xx-movimiento,yy);
      xx-=movimiento;
      break;
      case teclas.RIGHT:

      refrescar();
      console.log("vamo pa derecha");
      papel.drawImage(cerdo.imagen,xx+movimiento,yy);
      xx+=movimiento;

      break;
    
  }

}

function refrescar(){
    //redibujar animales en posiciones guardadas

    papel.drawImage(fondo.imagen,0,0);

    console.log("posiciones ");

    console.log(cantidad);

     for (var i = 0; i < cantidad; i++) {
         
           console.log("x");
           console.log(vx[i]);

           console.log("y");
           console.log(vy[i]);

           papel.drawImage(vaca.imagen,vx[i],vy[i]);
           papel.drawImage(pollo.imagen,px[i],py[i]);
           papel.drawImage(cerdo.imagen,cx[i],cy[i]);

      }
    
  
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

    console.log(cantidad);


	if(fondo.cargaOK){

    	papel.drawImage(fondo.imagen,0,0);

	}
   if(vaca.cargaOK){

   	   for (var i = 0; i < cantidad; i++) {
   	   	

   	    var x=aleatorio(0,7);
   	    var y=aleatorio(0,7);
		
         x*=60;
         y*=60;

         //console.log(i);
         //console.log("original x "+x);
         //console.log("original y "+y);
          vx[i]=x;
          vy[i]=y;
       	papel.drawImage(vaca.imagen,x,y);


   	   }

	}

	if(pollo.cargaOK){


		for (var i = 0; i < cantidad; i++) {
   	   	

   	     var x=aleatorio(0,7);
         var y=aleatorio(0,7);
		
         x*=60;
         y*=60;

         console.log(i);
         console.log("original x pollo "+x);
         console.log("original y pollo "+y);

        px[i]=x;
        py[i]=y;

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

         cx[i]=x;
         cy[i]=y;


       papel.drawImage(cerdo.imagen,x,y);

       }


  }
}

function aleatorio(min,max){

   var resultado;

   resultado=Math.floor	(Math.random()*(max-min+1))+min;


  return resultado;

}