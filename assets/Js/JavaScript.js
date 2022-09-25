let equivalenciaNumerica = (parseInt(prompt("Hola usuario, le doy la bienvenida a un sistema de conversion de peso a partir de Kilogramos, porfavor escriba algun numero dentro del recuadro para su conversion", 0)));

while (isNaN(equivalenciaNumerica) || (equivalenciaNumerica == 0) ) {
  equivalenciaNumerica = parseInt(prompt("Por favor solo introdusca un numero y que su valor sea mayor que 0", 0));
}

let conversion = prompt(`El valor elegido es ---> ${equivalenciaNumerica} Kg (Kilogramos) \n\nAhora de la siguiente lista elija que medida de peso desea obtener a partir de los Kilogramos escritos, escribiendo los sufijos correspondiente\n\n tl (toneladas) \n\n gr (gramos) \n\n mg (miligramos) \n\n ug (microgramos) \n\n ng (nanogramos) \n\n pg (picogramos)\n`);

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

  document.write(`${equivalenciaNumerica} Kg (Kilogramos) convertidos a miligramos son ${resultado} TL`);
  alert (`${equivalenciaNumerica} Kg (Kilogramos) convertidos a toneladas son ${resultado} Tl`);
  

  } else if (("gr" === conversion) || ("Gr" ===  conversion)  || ("GR" ===  conversion)) {

    resultado = equivalenciaNumerica * gr;

    document.write(`${equivalenciaNumerica} Kg (Kilogramos) convertidos a gramos son ${resultado} Gr`);
    alert (`${equivalenciaNumerica} Kg (Kilogramos) convertidos a gramos son ${resultado} Gr`);

  } else if (("mg" === conversion) || ("Mg" === conversion) || ("MG" === conversion)) {

    resultado = equivalenciaNumerica * mg;

    document.write(`${equivalenciaNumerica} Kg (Kilogramos) convertidos a miligramos son ${resultado} Mg`)
    alert (`${equivalenciaNumerica} Kg (Kilogramos) convertidos a miligramos son ${resultado} Mg`);

  } else if (("ug" === conversion) || ("Ug" === conversion) || ("UG" === conversion)) {

    resultado = equivalenciaNumerica * ug;

    document.write(`${equivalenciaNumerica} Kg (Kilogramos) convertidos a nanogramos son ${resultado} Ug`);
    alert (`${equivalenciaNumerica} Kg (Kilogramos) convertidos a microgramos son ${resultado} Ug`);

  } else if (("ng" === conversion) || ("Ng" === conversion) || ("NG" === conversion)) {

    resultado = equivalenciaNumerica * ng;

    document.write(`${equivalenciaNumerica} Kg (Kilogramos) convertidos a nanogramos son ${resultado} Ng`);
    alert (`${equivalenciaNumerica} Kg (Kilogramos) convertidos a nanogramos son ${resultado} Ng`);

  } else if (("pg" === conversion) || ("Pg" === conversion) || ("PG" === conversion)) {

    resultado = equivalenciaNumerica * pg;

    document.write(`${equivalenciaNumerica} Kg (Kilogramos) convertidos a picogramos son ${resultado} Pg`);
    alert (`${equivalenciaNumerica} Kg (Kilogramos) convertidos a picogramos son ${resultado} Pg`);

  } else {

    document.write(`${equivalenciaNumerica} no se logro debido a que no ingreso el sufijo correspondiente, refresque la pagina ;)`);
    alert("No has escrito ningun sufijo correspondiente, intente nuevamente");
    
  }
}

equivalenciaPeso();



