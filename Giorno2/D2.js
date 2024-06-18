/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1;
let numero2;
if (numero1 > numero2) {
  console.log(numero1);
}
else if (numero1 === numero2) {
  console.log("i due numeri sono uguali");
}
else {
  console.log(numero2);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let esercizio2;
if (esercizio2 != 5) {
  console.log("not equal");
}
else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let esercizio3;
let resto = esercizio3 % 5;
if (resto === 0) {
  console.log("divisibile per 5");
}
else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num1;
let num2;
if (num1 === 8 || num2 === 8) {
  console.log("uno dei due numeri è uguale a 8");
}
if (num1 + num2 === 8 || num1 - num2 === 8) {
  console.log("l'addizione o la sottrazione è uguale a 8");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart;
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart);
}
else {
  totalShoppingCart += 10;
  console.log(totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCartBf;
let sconto = totalShoppingCartBf / 100 * 20;
totalShoppingCartBf = totalShoppingCartBf - sconto;
if (totalShoppingCartBf > 50) {
  console.log(totalShoppingCartBf);
}
else {
  totalShoppingCartBf += 10;
  console.log(totalShoppingCartBf);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let esercizio7 = [9, 5, 2];
esercizio7.sort();
console.log(esercizio7);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let esercizio8;
if (typeof esercizio8 === "number") {
  console.log("numero");
}
else {
  console.log("non è un numero");
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let esercizio9;
if (esercizio9 % 2 === 0) {
  console.log("pari");
}
else {
  console.log("dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],

}

me.city = "Toronto";



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let esercizio14 = [];
esercizio14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let esercizio15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
esercizio15[9] = 100;
console.log(esercizio15);
