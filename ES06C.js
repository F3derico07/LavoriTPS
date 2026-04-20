function triangoloTartaglia() {
    // prendo il numero di righe da terminale
    const n = Number(process.argv[2]);

    if (isNaN(n) || n <= 0) {
        console.log("Inserisci un numero valido (es: node file.js 10)");
        return;
    }

    let dati = [];
    const larghezza = 4;

    for (let r = 0; r < n; r++) {
        dati[r] = [];

        for (let c = 0; c <= r; c++) {
            if (c === 0 || c === r) {
                dati[r][c] = 1;
            } else {
                dati[r][c] = dati[r - 1][c - 1] + dati[r - 1][c];
            }
        }

        let testo = dati[r]
            .map(x => x.toString().padStart(larghezza, " "))
            .join("");

        let offset = " ".repeat((n - r - 1) * (larghezza / 2));

        console.log(offset + testo);
    }
}

triangoloTartaglia();
