function triangoloTartaglia(n) {
    if (n <= 0) return;

    let dati = [];
    const larghezza = 4; // spazio fisso per ogni numero (serve per allineare)

    for (let r = 0; r < n; r++) {
        dati[r] = [];

        for (let c = 0; c <= r; c++) {
            // primo e ultimo elemento della riga = 1
            if (c === 0 || c === r) {
                dati[r][c] = 1;
            } else {
                // valore dato dalla somma dei due sopra
                dati[r][c] = dati[r - 1][c - 1] + dati[r - 1][c];
            }
        }

        // preparo la riga per la stampa
        let testo = dati[r]
            .map(x => x.toString().padStart(larghezza, " "))
            .join("");

        // calcolo gli spazi iniziali per centrare il triangolo
        let offset = " ".repeat((n - r - 1) * (larghezza / 2));

        console.log(offset + testo);
    }
}

// prova con 10 righe
triangoloTartaglia(10);
