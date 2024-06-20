/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(L1, L2) {
     return L1 * L2;
}

console.log(area(7, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
     if (n1 === n2) {
          return (n1 + n2) * 3;
     }
     return (n1 + n2);

}
console.log(crazySum(3, 3));
console.log(crazySum(5, 12));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
     let differenza = Math.abs(n1 - 19);
     if (n1 > 19) {
          return (differenza * 3);
     }
     return (differenza);
}
console.log(crazyDiff(23));
console.log(crazyDiff(15));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
     if ((n >= 20 && n <= 100) || n === 400) {
          return (true);
     }
     return (false);

}
console.log(boundary(60));
console.log(boundary(400));
console.log(boundary(250));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(stringa) {
     let parola = stringa.slice(0, 7);
     if (parola === "EPICODE") {
          return (stringa);
     }
     return ("EPICODE ".concat(stringa));
}
console.log(epify("EPICODE"));
console.log(epify("ciao"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(np) {
     if (np > 0) {
          if (np % 3 === 0 || np % 7 === 0) {
               return ("divisibile per 3 o per 7");

          }
          else {
               return ("non è divisibile per 3 o per 7")
          }

     }
return("non è positivo")
}
console.log(check3and7(3))
console.log(check3and7(7))
console.log(check3and7(5))
console.log(check3and7(-8))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString (stringa) {
     let parola = stringa.split("");
     let parolainversa = "";
     for (let i = parola.length - 1; i>=0;i--) {
        parolainversa += parola[i];
     }
     return (parolainversa);

}
console.log(reverseString("hello"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst (stringa) {
     let parola = stringa.split(" ");
     let parolamaiuscola = "";
     for (let i = 0; i<parola.length; i++) {
parolamaiuscola += parola[i].charAt(0).toUpperCase() + parola[i].slice(1)+" ";
     }
     return(parolamaiuscola);
}
console.log(upperFirst("ciccio bello"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString (stringa) {
     let parolanuova = stringa.slice(1, stringa.length -1);
     return(parolanuova);
}
console.log(cutString("hello"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom (n) {
     let arrcasuale = [];
     for (let i = 0;  i<n; i++ ) {
          arrcasuale.push(Math.floor(Math.random()*11));
     }
     return(arrcasuale);
}
console.log(giveMeRandom(5));