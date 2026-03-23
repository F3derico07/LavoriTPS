// Creo un oggetto chiamato "book" con alcune informazioni su un libro
const book = {
  titolo: "Il nome della rosa",          // titolo del libro
  autore: "Umberto Eco",                 // autore del libro
  annoPubblicazione: 1980,               // anno in cui è stato pubblicato
  genere: "Romanzo storico",             // genere del libro
  numeroPagine: 512                      // numero totale di pagine
};

// Uso un ciclo for...in per scorrere tutte le proprietà dell'oggetto
for (let key in book) {

  // "key" rappresenta il nome della proprietà (es. titolo, autore, ecc.)

  // Stampo in console sia la chiave che il valore associato
  console.log(`${key} -> ${book[key]}`);
}
