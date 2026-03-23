// Oggetto con i dati del libro
const book = {
  titolo: "1984",                    // nome del libro
  autore: "George Orwell",           // chi l'ha scritto
  annoPubblicazione: 1949,           // quando è uscito
  genere: "Distopico",               // tipo di libro
  numeroPagine: 328                  // quante pagine ha
};

// Giro tutte le proprietà dell'oggetto
for (let key in book) {

  // "key" cambia ogni volta e prende il nome delle proprietà

  // Stampo tutto in console in formato chiave -> valore
  console.log(`${key} -> ${book[key]}`);
}
