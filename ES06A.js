function operazioniBase() {
    // Argomenti passati da terminale:
    // [0] = eseguibile Node
    // [1] = file eseguito
    const valore1 = Number(process.argv[2]);
    const simbolo = process.argv[3];
    const valore2 = Number(process.argv[4]);

    // Controllo validità numeri
    if (isNaN(valore1) || isNaN(valore2)) {
        console.log("Errore: inserisci solo numeri validi.");
        return;
    }

    let output;

    // Scelta operazione
    switch (simbolo) {
        case "+":  
            output = valore1 + valore2; 
            break;
        case "-":  
            output = valore1 - valore2; 
            break;
        case "*":  
            output = valore1 * valore2; 
            break;
        case "/":  
            output = valore2 !== 0 ? valore1 / valore2 : "Errore: divisione per zero"; 
            break;
        case "**": 
            output = valore1 ** valore2; 
            break;
        default:   
            output = "Operatore non riconosciuto.";
    }

    console.log("Output finale:", output);
}

operazioniBase();
