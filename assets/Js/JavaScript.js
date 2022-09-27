let usuario = prompt("¡Hola!. ¿Cual es tu nombre/apodo?");

while (!isNaN(usuario) || usuario == null) {
  usuario = prompt(`Con que: --->${usuario} <--- la verdad, no creo que eso sea un nombre o hasta creo que no pusiste ninguno jeje, porfavor inserta tu nombre o apodo, como suele llamarte`);

  if (usuario === null) {
    usuario = prompt(`Poner cancel no es una opcion, vamos pon tu apodo o nombre para continuar`)
  }
}

console.log(`Hola ${usuario}, abajo tendras el resultado`)

let equivalenciaNumerica = (parseInt(prompt(`Hey ${usuario}, Te doy la bienvenida a un sistema de conversion de peso a partir de Kilogramos a otras medidas, porfavor escriba algun numero dentro del recuadro para su conversion`, 0)));

while (isNaN(equivalenciaNumerica) || (equivalenciaNumerica == 0) ) {
  equivalenciaNumerica = parseInt(prompt(`Por favor ${usuario} solo introdusca un numero y que su valor sea mayor que 0 para continuar`, 0));

  console.log(equivalenciaNumerica)
}

console.log(`${equivalenciaNumerica}kg ----------> es el valor inicial`)

let conversion = prompt(`El valor que elegiste ${usuario} es ---> ${equivalenciaNumerica} Kg (Kilogramos) \n\nAhora de la siguiente lista, ${usuario}, escoja que medida de peso desea obtener a partir de los Kilogramos escritos, escribiendo los sufijos de la lista \n\n tl/Tl/TL (toneladas) \n\n gr/Gr/GR (gramos) \n\n mg/Mg/MG (miligramos) \n\n ug/Ug/UG (microgramos) \n\n ng/Ng/NG (nanogramos) \n\n pg/Pg/PG (picogramos)\n`);


console.log(`${equivalenciaNumerica}kg -------> a ----> ${conversion} son:`)

function equivalenciaPeso() {

  let resultado = 0;
  let tl = 0.0010;
  let gr = 1000;
  let mg = 1000000;
  let ug = 1000000000;
  let ng = 1000000000000;
  let pg = 1000000000000000;

if (("tl" === conversion) || ("Tl" ===  conversion)  || ("TL" ===  conversion)) {

  resultado = equivalenciaNumerica * tl;

  document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Toneladas, su resultado es ${resultado} TL`);
  alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a toneladas son ${resultado} Tl`);
  console.log(`${resultado} Tl, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("gr" === conversion) || ("Gr" ===  conversion)  || ("GR" ===  conversion)) {

    resultado = equivalenciaNumerica * gr;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Gramos, su resultado es ${resultado} Gr`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a gramos son ${resultado} Gr`);
    console.log(`${resultado} Gr, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("mg" === conversion) || ("Mg" === conversion) || ("MG" === conversion)) {

    resultado = equivalenciaNumerica * mg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Miligramos, su resultado es ${resultado} Mg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Miligramos son ${resultado} Gr`);
    console.log(`${resultado} Mg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("ug" === conversion) || ("Ug" === conversion) || ("UG" === conversion)) {

    resultado = equivalenciaNumerica * ug;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Microgramos, su resultado es ${resultado} Ug`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Microgramos son ${resultado} Ug`);
    console.log(`${resultado} Ug, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("ng" === conversion) || ("Ng" === conversion) || ("NG" === conversion)) {

    resultado = equivalenciaNumerica * ng;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Nanogramos, su resultado es ${resultado} Ng`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a gramos son ${resultado} Ng`);
    console.log(`${resultado} Ng, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("pg" === conversion) || ("Pg" === conversion) || ("PG" === conversion)) {

    resultado = equivalenciaNumerica * pg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Picogramos, su resultado es ${resultado} Pg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a gramos son ${resultado} Gr`);
    console.log(`${resultado} Pg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else {
    
    document.write(`---> Los ${equivalenciaNumerica}kg <--- no se a logrado realizar alguna equivalencia ya que no selecciono o escribio el sufijo correspondiente, porfavor refresque la pagina`);
    alert("No has escrito/escribiste mal unos de los sufijos de la lista, intente nuevamente");
    console.log(`${equivalenciaNumerica}kg es igual a -------------> a nada debido a que no has escrito ninguna de las medidas de peso que estaban en la lista, porfavor refresque la pagina ;)`)
    
  }
}

equivalenciaPeso();



