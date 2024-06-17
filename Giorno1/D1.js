/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* NUMBER=RAPPRESENTA SIA I VALORI NUMERICI INTERI O CON LA VIRGOLA
   STRING=RAPPRESENTA UN VALORE COMPOSTO DA UNA SEQUENZA DI CARATTERI TRA VIRGOLETTE
   BOOLEAN=RAPPRESENTA UN VALORE COMPOSTA DA DUE POSSIBILI SCELTE TRUE O FALSE
   NULL=LA VARIABILE ESISTE MA HA UN VALORE NULLO
   UNDEFINED=LA VARIABILE NON HA VALORE PERCHE' NON E' STATA DICHIARATA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Maria Pia";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero = 12;
let numero2 = 20;
let somma = numero+numero2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Baldoin";
const nome = "Maria Pia";
/*nome = "Baldoin";*/
console.log(nome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
x-=4;
console.log(x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
const verifica = (name1 === name2) ? "sono uguali" : "sono diversi";
console.log(verifica);
const verifica2 = (name1 === name2.toLowerCase()) ? "sono uguali" : "sono diversi";
console.log(verifica2);
