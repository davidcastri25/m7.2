/* 1- 
- Crea un array amb el teu nom on cada posició correspongui a una lletra.
- Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres. */

let nom = ["D", "A", "V", "I", "D"];

for (let i = 0; i < nom.length; i++) {
    console.log(nom[i]);
}


/* 2- 
- Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
- Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’ */

let nomEx2 = ["D", "A", "V", "I", 1, "D"];
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
let nomEx3 = ["D", "A", "V", "I", "D", "D", "D", "A", "V", "V"];
let nuevoEx3 = [];
let count = 0;

for (let i = 0; i < nomEx3.length; i++) {
    for (let j = i + 1; j < nomEx3.length; j++) {
        if (nomEx3[i] == nomEx3[j]) {
            count++;
            nomEx3.splice(j, 1);
        }
    }

    nuevoEx3.push(nomEx3[i] + ": " + count);

    count = 0;
}

console.log(nuevoEx3);

/*let nomMap = nomEx3.map(function(letra, i){
    
    if (letra[i] ==)
})

console.log(nomMap);  */