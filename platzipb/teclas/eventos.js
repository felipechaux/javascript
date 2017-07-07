//json- objeto
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);
document.addEventListener("keyup",dibujarTeclado);

var cuadrito=document.getElementById("dibujo");
var papel=cuadrito.getContext("2d");
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
	lienso.moveTo(xinicial,xfinal);
	lienso.lineTo(xfinal,yfinal);
	lienso.stroke();
	//cerrar traso
	lienso.closePath();

}




function dibujarTeclado(evento)
{
    var color="blue"; 
    var movimiento=10;
	switch(evento.keyCode)
	{
	
	    case teclas.UP:
	    dibujarLinea(color,x,y,x,y-movimiento,papel);
	    y-=movimiento;
	    console.log("vamo pa arriba");
	    break;
	    case teclas.DOWN:
	    console.log("vamo pa abajo");
	    break;
	    case teclas.LEFT:
	    console.log("vamo pa izquierda");
	    break;
	    case teclas.RIGHT:
	    console.log("vamo pa derecha");
	    dibujarLinea(color,x,y,x+movimiento,y,papel);
	    x=x+movimiento;
	    break;
	    default:
	    console.log("otra tecla");
	    break;
	}

//console.log("tecla oprimida");
console.log(evento.keyCode);
}