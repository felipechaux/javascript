
class Billete{


   	constructor(v,c)
	{

      this.valor=v;
      this.cantidad=c;

	}



}

function entregarDinero(){
 
	
   var d=document.getElementById("dinero");
    
   dinero=parseInt(d.value); 


	for (var bi of caja) 
	{
		//console.log(bi);
       
       if (dinero>0)
       {

       	 div=Math.floor(dinero/bi.valor);
         //console.log(div);

       	 if(div>bi.cantidad)
       	 {
           papeles=bi.cantidad;
       	 }else
       	 {
       	   papeles=div;
       	 }

       	 entregado.push(new Billete(bi.valor,papeles));
         dinero=dinero-(bi.valor*papeles);

       }

	}

   if(dinero>0)
     {

       console.log("No tengo dinero");
       resultado.innerHTML="No tengo dinero";
     }
     else
     {

	       for (var e of entregado) 
	       {

	       //	document.write(e.cantidad+" billetes de $"+e.valor+" <br/>");

	         if(e.cantidad>0)
	         {
	           resultado.innerHTML+=e.cantidad+" billetes de $"+e.valor+" <br/>";
	           console.log(entregado);
	         }

	       }
	  
     
     }


}

var caja=[];

//vueltas
var entregado=[];


caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

var dinero=0;
var div=0;
var papeles=0;

var resultado=document.getElementById("resultado");
var b=document.getElementById("vueltas");

b.addEventListener("click",entregarDinero);
