function invertiCifre() {
    // Recupero del valore inserito da terminale
    const dato = process.argv[2];

    // Controllo se è stato inserito qualcosa
    if (!dato) {
        console.log("Devi inserire un numero (es: node file.js 1234)");
        return;
    }

    const valore = Number(dato);

    // Verifica che sia un numero valido
    if (isNaN(valore)) {
        console.log("Input non valido, serve un numero.");
        return;
    }

    // Procedura:
    // - tolgo il segno con Math.abs
    // - trasformo in stringa
    // - inverto le cifre
    const invertito = Math.abs(valore)
        .toString()
        .split("")
        .reverse()
        .join("");

    // Rimetto il segno originale
    const finale = Number(invertito) * Math.sign(valore);

    console.log("Risultato:", finale);
}

invertiCifre();
