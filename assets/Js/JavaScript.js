let usuario = prompt("¡Hola!. ¿Cual es tu nombre/apodo?");

while (!isNaN(usuario)) {
  alert(`¡No has ingresado ningun nombre/apodo!, por favor vuelve a intentarlo`);
  
  usuario = prompt("Vuelve a poner un nombre/apodo. Como suelen llamarte")

}

console.log(`Hola ${usuario}, abajo tendras el resultado`)

let equivalenciaNumerica = (parseInt(prompt(`Hey ${usuario}, Te doy la bienvenida a un sistema de conversion de peso a partir de Kilogramos a otras medidas, porfavor escriba algun numero dentro del recuadro para su conversion`, 0)));

while (isNaN(equivalenciaNumerica) || (equivalenciaNumerica == 0) ) {

  alert(`¡No has colocado ningun numero!`);

  equivalenciaNumerica = parseInt(prompt(`Por favor ${usuario} solo introdusca un numero y que su valor sea mayor que 0 para continuar`, 0));

  console.log(equivalenciaNumerica)
}

console.log(`${equivalenciaNumerica}kg ----------> es el valor inicial`)

let conversion = prompt(`El valor que elegiste ${usuario} es ---> ${equivalenciaNumerica} Kg (Kilogramos) \n\nAhora de la siguiente lista, ${usuario}, escoja que medida de peso desea obtener a partir de los Kilogramos escritos, escribiendo los sufijos de la lista \n\n tl/Tl/TL (toneladas) \n hg/Hg/HG (hectogramos) \n dg/Dg/DG (decagramos) \n gr/Gr/GR (gramos) \n dcg/Dcg/DCG (decigramos) \n cg/Cg/CG (centigramos) \n mg/Mg/MG (miligramos) \n ug/Ug/UG (microgramos) \n ng/Ng/NG (nanogramos) \n pg/Pg/PG (picogramos)\n\nSistemas de unidades de masa utilizados en otros paises:\n\n lb/Lb/LB (libras)\n oz/Oz/OZ (Onzas)\n`);


console.log(`${equivalenciaNumerica}kg -------> a ----> ${conversion} son:`)

function equivalenciaPeso() {

  let resultado = 0;
  let tl = 0.0010;
  let hg = 10;
  let dg = 100;
  let gr = 1000;
  let dcg = 10000;
  let cg = 100000;
  let mg = 1000000;
  let ug = 1000000000;
  let ng = 1000000000000;
  let pg = 1000000000000000;
  let lb = 2.20462;
  let oz = 35.274;

if (("tl" === conversion) || ("Tl" ===  conversion)  || ("TL" ===  conversion)) {

  resultado = equivalenciaNumerica * tl;

  document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Toneladas, su resultado es ${resultado} TL`);
  alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a toneladas son ${resultado} Tl\n\n¡Hasta luego!`);
  console.log(`${resultado} Tl, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("hg" === conversion) || ("Hg" ===  conversion)  || ("HG" ===  conversion)) {

    resultado = equivalenciaNumerica * hg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Hectogramos, su resultado es ${resultado} Hg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a hectogramos son ${resultado} Hg\n\n¡Hasta luego!`);
    console.log(`${resultado} Hg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("dg" === conversion) || ("Dg" ===  conversion)  || ("DG" ===  conversion)) {

    resultado = equivalenciaNumerica * dg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Decagramos, su resultado es ${resultado} Dg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a decagramos son ${resultado} Dg\n\n¡Hasta luego!`);
    console.log(`${resultado} Dg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);
  
  } else if (("gr" === conversion) || ("Gr" ===  conversion)  || ("GR" ===  conversion)) {

    resultado = equivalenciaNumerica * gr;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Gramos, su resultado es ${resultado} Gr`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a gramos son ${resultado} Gr\n\n¡Hasta luego!`);
    console.log(`${resultado} Gr, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("dcg" === conversion) || ("Dcg" ===  conversion)  || ("DCG" ===  conversion)) {

    resultado = equivalenciaNumerica * dcg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Decigramos, su resultado es ${resultado} Dcg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Decigramos son ${resultado} Dcg\n\n¡Hasta luego!`);
    console.log(`${resultado} Dcg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);
  
  } else if (("cg" === conversion) || ("Cg" ===  conversion)  || ("CG" ===  conversion)) {

    resultado = equivalenciaNumerica * cg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Decigramos, su resultado es ${resultado} Cg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Centigramos son ${resultado} Cg\n\n¡Hasta luego!`);
    console.log(`${resultado} Cg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);
  
  } else if (("mg" === conversion) || ("Mg" === conversion) || ("MG" === conversion)) {

    resultado = equivalenciaNumerica * mg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Miligramos, su resultado es ${resultado} Mg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Miligramos son ${resultado} Gr\n\n¡Hasta luego!`);
    console.log(`${resultado} Mg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("ug" === conversion) || ("Ug" === conversion) || ("UG" === conversion)) {

    resultado = equivalenciaNumerica * ug;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Microgramos, su resultado es ${resultado} Ug`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Microgramos son ${resultado} Ug\n\n¡Hasta luego!`);
    console.log(`${resultado} Ug, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("ng" === conversion) || ("Ng" === conversion) || ("NG" === conversion)) {

    resultado = equivalenciaNumerica * ng;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Nanogramos, su resultado es ${resultado} Ng`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Nanogramos son ${resultado} Ng\n\n¡Hasta luego!`);
    console.log(`${resultado} Ng, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("pg" === conversion) || ("Pg" === conversion) || ("PG" === conversion)) {

    resultado = equivalenciaNumerica * pg;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Picogramos, su resultado es ${resultado} Pg`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Picogramos son ${resultado} Pg\n\n¡Hasta luego!`);
    console.log(`${resultado} Pg, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("lb" === conversion) || ("Lb" === conversion) || ("LB" === conversion)) {

    resultado = equivalenciaNumerica * lb;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Libras, su resultado es ${resultado} Lb`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a libras son ${resultado} Lb\n\n¡Hasta luego!`);
    console.log(`${resultado} Lb, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  } else if (("oz" === conversion) || ("Oz" === conversion) || ("OZ" === conversion)) {

    resultado = equivalenciaNumerica * oz;

    document.write(`Aqui,${usuario}, te dejo el resultado de los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Onzas, su resultado es ${resultado} Oz`);
    alert(`Hola, otra vez, ${usuario}. Los ${equivalenciaNumerica} Kg (Kilogramos) convertidos a Onzas son ${resultado} Oz\n\n¡Hasta luego!`);
    console.log(`${resultado} Oz, gracias por usar este sistema ${usuario}, ¡Hasta luego!`);

  }else {
    
    alert("No has escrito/escribiste mal unos de los sufijos de la lista, intente nuevamente");

    document.write(`---> Los ${equivalenciaNumerica}kg <--- no se a logrado realizar alguna equivalencia ya que no selecciono o escribio el sufijo correspondiente, porfavor refresque la pagina`);
    
    console.log(`${equivalenciaNumerica}kg es igual a -------------> a nada debido a que no has escrito ninguna de las medidas de peso que estaban en la lista, porfavor refresque la pagina ;)`)
    
  }
}

equivalenciaPeso();



