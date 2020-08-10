/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;
	var nombre;
	var lugar;
	var temporada;
	var cantidadPersonas;
	var contadorBariloche;
	var contadorCataratas;
	var contadorSalta;
	var banderaMasPasajeros = "primera vez";
	var nombreMasPasajeros;
	var cantidadPasajeros;
	var promedioInvierno;
	var contadorInvierno;
	var sumaPersonasInvierno;
	var lugarMasElegido;
	
	sumaPersonasInvierno=0;
	contadorInvierno=0;
	contadorBariloche=0;
	contadorCataratas=0;
	contadorSalta=0;

	respuesta = true;

	while (respuesta){

		nombre = prompt("ingrese nombre del titular");

		while (!(isNaN(nombre))){

			nombre = prompt("ingrese nombre en letras");
		}

		lugar = prompt("ingrese el lugar");

		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){

			lugar = prompt("ingrese bariloche salta o cataratas unicamente");
		}

		temporada = prompt("ingrese temporada en la que viaja");

		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
				
			temporada = prompt("ingrese otoño verano invierno o primavera unicamente");
		}
		
		cantidadPersonas = prompt("ingrese cantidad de personas que viajan");
		cantidadPersonas = parseInt(cantidadPersonas);

		while (isNaN(cantidadPersonas) || cantidadPersonas <=0){

			cantidadPersonas = prompt("ingrese cantidad de personas en numeros mayor a 0");
			cantidadPersonas = parseInt(cantidadPersonas);
		}

		if (lugar == "bariloche"){

			contadorBariloche++;
		}
		
		if (lugar == "cataratas"){

			contadorCataratas++;
		}

		if (lugar == "salta"){

			contadorSalta++;
		}

		if (banderaMasPasajeros == "primera vez"){
			banderaMasPasajeros = "segunda vez";

			nombreMasPasajeros = nombre;
			cantidadPasajeros = cantidadPersonas;
		}else{
			if (cantidadPersonas > cantidadPasajeros){

				nombreMasPasajeros = nombre;
				cantidadPasajeros = cantidadPersonas;
			}
		}
		
		if (temporada == "invierno"){

			contadorInvierno++;
			sumaPersonasInvierno = sumaPersonasInvierno + cantidadPersonas;
		}	
		
		respuesta = confirm("desea continuar?");
	}

	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){

		lugarMasElegido = "bariloche";
	
	}else{
		if (contadorCataratas > contadorSalta){

			lugarMasElegido = "cataratas";
		
		}if (contadorSalta > contadorCataratas){

			lugarMasElegido = "salta";
		} 
	}

	promedioInvierno = sumaPersonasInvierno / contadorInvierno;

	console.log ("el lugar mas elegido es " + lugarMasElegido);

	console.log ("la persona que lleva mas titulares es " +nombreMasPasajeros);

	if(contadorInvierno > 0){
		console.log ("el promedio de personas que viajan en invierno es de " + promedioInvierno + 
				" de personas");
	}			
}
