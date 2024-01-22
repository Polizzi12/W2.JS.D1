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

/* i diversi tipi di datatype in javascript sono:
 String: è il datatype che indica quei valori formati da un carattere o da una serie di carratteri e questi devono essere messi fra apici o doppi apici sennò non verranno riconociuti come tale
 Number: come dice il nome è il datatype che include qualsiasi tipo di numero (interi decimali negativi ecc) e questi tipi di dati a differrenza degli string non devono essere messi fra apici, altrimenti verranno contati come stirnghe
 Boolean: questo tipo di datatype serve ad includere due semplici valori, ovvero (Vero e falso) o per meglio dire (true & false)
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.*/

let myName = "Giuseppe";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let somma = 20 + 12;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Polizzi";
console.log(myName);

const nome = "Giovanni";
console.log(nome);
nome = "Alessandro";
console.log(nome);

/*Queste quattro righe di codice genereranno un arrore dato che una volta che dichiaro una variabile con cost e le assegno un valore in questo caso Giovanni, sarà impossibile darle un nuovo valore, infatti tutto ciò che è dichicarto con cost non può essere cambiato. */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let number = 4;
let differrenza = number - x;
console.log(differenza);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1.toLowerCase() === name2.toLowerCase());
