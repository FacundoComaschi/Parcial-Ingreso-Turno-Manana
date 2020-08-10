/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var marca;
  var precio;
  var peso;
  var tipo;
  var respuesta = true;
  var pesoTotal;
  var banderaMasCaroLiquido = "primera vez";
  var liquidoMasCaro;
  var marcaLiquidoMasCaro;
  var banderaSolidoMasLiviano = "primera vez";
  var solidoMasLiviano;
  var marcaSolidoMasLiviano;

  pesoTotal = 0;

    while (respuesta){

      tipo = prompt("ingrese tipo de producto");

      while (tipo != "solido" && tipo != "liquido"){

        tipo = prompt("ingrese tipo solido o liquido");
      }

      marca = prompt ("ingrese marca producto");

      while (!(isNaN(marca))){

        marca = prompt ("ingrese marca solo en letras");
      }

      precio = prompt("ingrese precio producto");
      precio = parseInt(precio);

      while (isNaN(precio)){

        precio = prompt("ingrese precio en numeros");
        precio = parseInt(precio);
      }

      peso = prompt("ingrese peso del producto");
      peso = parseInt(peso);

      while (isNaN(peso)){

        peso = prompt("ingrese peso en numeros");
        peso = parseInt(peso);
      }
      
      pesoTotal = pesoTotal + peso;

      if (tipo == "liquido"){

        if (banderaMasCaroLiquido == "primera vez"){
          banderaMasCaroLiquido = "segunda vez";

          liquidoMasCaro = precio;
          marcaLiquidoMasCaro = marca;
        
        }else{
          if (precio > liquidoMasCaro){

            liquidoMasCaro = precio;
            marcaLiquidoMasCaro = marca;
          }
        }
      }

      if (tipo == "solido"){

        if (banderaSolidoMasLiviano == "primera vez"){
          banderaSolidoMasLiviano = "segunda vez";

          solidoMasLiviano = peso;
          marcaSolidoMasLiviano = marca;
        
        }else{
          if (peso < solidoMasLiviano){

            solidoMasLiviano = peso;
            marcaSolidoMasLiviano = marca;
          }
        }
      }

      respuesta = confirm("desea continuar?");
    }

    console.log ("el peso total de la compra es de "+ pesoTotal + " kilos");

    console.log ("la marca del mas caro de los liquidos es " + marcaLiquidoMasCaro);

    console.log ("la marca del mas liviano de los solidos es " + marcaSolidoMasLiviano);


}
