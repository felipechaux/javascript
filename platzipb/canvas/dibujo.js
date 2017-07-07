var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("boton");
boton.addEventListener("click",dibujoPorClick);

var d=document.getElementById("dibujo");
var ancho=d.width;
var lienso=d.getContext("2d");




function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
	//arrancar traso
	lienso.beginPath();
	//color
	lienso.strokeStyle=color;
	//posiciones
	lienso.moveTo(xinicial,xfinal);
	lienso.lineTo(xfinal,yfinal);
	lienso.stroke();
	//cerrar traso
	lienso.closePath();

}

function dibujoPorClick()
{

var lineas=parseInt(texto.value);
var l=0;
//espacio total
//ancho/lineas
var incremento=ancho/lineas;


for (var i = 0; i <=lineas; i++) {

	l+=incremento;
    dibujarLinea("blue",0,0,l,ancho);

    dibujarLinea("red",ancho,ancho,ancho-l,0);
	console.log("Lineas "+i);

}
dibujarLinea("black",1,1,1,ancho-1);
dibujarLinea("black",0,ancho-1,ancho-1,ancho-1);
dibujarLinea("black",ancho-1,ancho-1,ancho-1,0);
dibujarLinea("black",ancho-1,0,0,0);
}



