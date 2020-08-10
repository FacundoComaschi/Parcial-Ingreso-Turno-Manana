/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contador;
	var contadorHombres;
	var contadorMujeres;
	var sumaEdad;
	var promedioEdadTotal;
	var banderaMujerMasTemperatura = "primera vez";
	var MujerMasTemperatura;
	var nombreMujerMasTemperatura;

	contador = 0;
	contadorHombres = 0;
	contadorMujeres = 0;
	sumaEdad = 0;
	while (contador < 5){

		nombre = prompt ("ingrese nombre");

		while (!(isNaN(nombre))){

			nombre = prompt("ingrese nombre sin numeros");
		}

		temperatura = prompt("ingrese temperatura de la persona");
		temperatura = parseInt(temperatura);

		while (isNaN(temperatura) || temperatura < 30){

			temperatura = prompt("ingrese temperatura mayor a 30 °");
			temperatura = parseInt(temperatura);
		}

		sexo = prompt ("ingrese sexo");

		while (sexo != "f" && sexo != "m"){

			sexo = prompt ("ingrese sexo f o m");
		}

		edad = prompt ("ingrese edad");
		edad = parseInt(edad);

		while (isNaN(edad)){

			edad = prompt ("ingrese edad en numeros");
			edad = parseInt(edad);
		}
		
		switch (sexo){
			
			case "f":
			contadorMujeres++;


			case "m":
			contadorHombres++;

		}

		if (sexo == "f"){

			if (banderaMujerMasTemperatura == "primera vez"){
				banderaMujerMasTemperatura = "segunda vez";

				MujerMasTemperatura = temperatura;
				nombreMujerMasTemperatura = nombre;
			}else{
				if (temperatura > MujerMasTemperatura){

					MujerMasTemperatura = temperatura;
					nombreMujerMasTemperatura = nombre;
				}
			}
		}
		
		sumaEdad = sumaEdad + edad;


		contador++;
	}
	
	promedioEdadTotal = sumaEdad / 5;


	console.log ("hay " + contadorMujeres + " de mujeres y hay " + contadorHombres + " de hombres" );

	console.log (" la edad promedio total es " + promedioEdadTotal);

	if (contadorMujeres > 0){
		
		console.log (" la mujer con mas temperatura es " + nombreMujerMasTemperatura);
	}
}
