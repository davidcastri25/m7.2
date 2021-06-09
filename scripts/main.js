/* 1- 
- Crea un array amb el teu nom on cada posició correspongui a una lletra.
- Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres. */

const nom = ["D", "A", "V", "I", "D"];

for (let i = 0; i < nom.length; i++) {
    console.log(nom[i]);
}


/* 2- 
- Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
- Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’ */

const nomEx2 = ["D", "A", "V", "I", 1, "D"];
let mensaje = "Partim del nom: ";

for (let i = 0; i < nomEx2.length; i++) {
    mensaje += nomEx2[i];    
}

mensaje += "."

console.log(mensaje);

for (let i = 0; i < nomEx2.length; i++) {
    if (!isNaN(nomEx2[i])) {
        console.log("Els noms de persones no contenen el número: " + nomEx2[i]);
    }
    else {
        switch (nomEx2[i]) {
            case "A":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "E":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "I":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "O":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "U":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            default:
                console.log("He trobat la CONSONANT: " + nomEx2[i]); 
        }
    }    
}


/* 3- Emmagatzemar en array les lletres i nombre de vegades que apareixen. Utilitza el mètode map().*/
const nomEx3 = ["D", "A", "V", "I", "D"];

console.log("Partiendo del array: " + nomEx3);

var nomMap = {};
nomEx3.map(letra => {    
    //Crearemos una propiedad en el objeto nomMap, el nombre de la cual será la letra que estamos iterando con map en este momento
    nomMap[letra] = (nomMap[letra] || 0) + 1;
    //Si la propiedad no existe, la creará y le dará valor 0, luego le sumará 1. Si la propiedad ya existe, le sumará 1 al valor que ya tenía
    //El operador || hace de short circuit operator. Si el primer operando da true (se ha encontrado un valor para nomMap[letra]), entonces el segundo operando se saltará y le sumaremos 1 al valor que se ha encontrado. Si el primer operando da false (no se ha encontrado un valor para nomMap[letra] y por lo tanto, esa letra no existe en nomMap), entonces evaluaremos el segundo operando (que es 0, y por tanto generaremos un elemento nomMap[letra] = 0 y le sumaremos 1).   
});

console.log(nomMap);

/* ///////////////////////////// Esto sería lo mismo pero con forEach ///////////////////////////////////////////////////////////////

let nomMap = contarLetras(nomEx3);

console.log(nomMap);

function contarLetras (arrLetras){
    let letrasContadas = {};

    //forEach itera por elementos, estaría iterando sobre los valores de cada propiedad (el valor del índice 0 de un array, por ejemplo)

    arrLetras.forEach(function (letra){
        //El elemento que está iterando forEach, ¿existe como propiedad dentro del objeto letras contadas?
        if (letra in letrasContadas) { //Si existe, vamos a sumarle +1 a el valor de esta propiedad.
            letrasContadas[letra]++;
        }
        else { //Si no existe, crearemos una nueva propiedad y su valor será 1
            letrasContadas[letra] = 1;
        }
    });

    return letrasContadas;
} */

/////////////////////// Tercera forma de hacerlo ////////////////////////////////////////////////////////

//Una tercera forma de hacerlo, en la que se necesita una forma para eliminar los duplicados del array que nos genera map. En este ejemplo el resultado del array no serán propiedades y valores, si no una string generada por concatenación.
//let nomMap = nomEx3.map(function(letra){
   // let elementReturn;    

    //Creamos un array con todas las repeticiones de la letra en la que se situa la iteración
    //let nomFilter = nomEx3.filter(function(caracter){
        //return caracter == letra;
    //});

    //Devolvemos cualquier elemento del array que se acaba de crear más su length, que será el número de repeticiones de la letra
    //elementReturn = nomFilter[0] + ": " + nomFilter.length;  

    //return elementReturn;
    
//});

/*function removeDuplicates(array) {
    let mySet = new Set (array);
    return Array.from(mySet);
}

console.log(removeDuplicates(nomMap));  */


/* 4-
- Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
- Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.*/

const arrName = ["D", "A", "V", "I", "D"];
const arrSurname = ["C", "A", "S", "T", "R", "I", "L", "L", "Ó", "N"];
const arrFullName = arrName.concat(" ").concat(arrSurname);

console.log(arrFullName);


/* Nivel 2- Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:*/
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

const arrValidaciones = returnArrEmail(str)

function returnArrEmail (texto) {    
    const expresion =/([a-z0-9-]+)@([a-z0-9-ñ]+)\.([a-z]{2,8})(\.[a-z]{2,8})?/gi;
    const validation = texto.match(expresion);
    return validation;
}

const arrSinDuplicados = arrValidaciones.filter((value, index) => {
    return arrValidaciones.indexOf(value) === index;
    //El método indexOf retorna el índice de la PRIMERA ocurrencia de un elemento en un array
    //Si el índice del elemento que estamos iterando con filter es igual al índice de la primera ocurrencia de ese elemento (arrValidaciones.indexOf(value)), se cumplirá la condición de filter para que nos retorne el valor en el nuevo array que se está generando. Si el índice del elemento que estamos iterando con filter es diferente al índice de la primera ocurrencia de ese elemento(arrValidaciones.indexOf(value)), significa que es una repetición.
});

console.log(arrSinDuplicados);

//Una forma que funciona para eliminar duplicados de una array
/* function removeDuplicates(arr) {
    let mySet = new Set (arr);
    return Array.from(mySet);
} */
// console.log(removeDuplicates(arrValidaciones));