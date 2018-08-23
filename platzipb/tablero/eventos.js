

var cuadrito=document.getElementById("dibujo");
var papel=cuadrito.getContext("2d");

cuadrito.addEventListener("mousemove",dibujarMouse);



var x=150;
var y=150;

dibujarLinea("red",149,149,151,151,papel);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienso)
{
	//arrancar traso
	lienso.beginPath();
	//color
	lienso.strokeStyle=color;
	//ancho de linea-grosor
	lienso.lineWidth=3;
	//posiciones
	lienso.moveTo(xinicial,yinicial);
	lienso.lineTo(xfinal,yfinal);
	lienso.stroke();
	//cerrar traso
	lienso.closePath();

}

function dibujarMouse(evento){

	  console.log("evento mouse ");
	  //console.log(evento);

     dibujarLinea("black",evento.clientX,evento.clientY,evento.layerX,evento.layerY,papel);




}
