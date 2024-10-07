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
let dataTypesDescription = `
1. **Number (Numero)**
I numeri sono come delle scatole che possono contenere valori numerici. Possiamo mettere dentro numeri interi, come 5, o numeri con la virgola, come 3.14. Possiamo anche fare operazioni, proprio come contare le caramelle!

2. **String (Stringa)**
Le stringhe sono come scatole di parole. Se vogliamo conservare una parola o una frase, la mettiamo in una stringa. Ad esempio, "Ciao!" è una stringa. Usando le virgolette, possiamo racchiuderle, proprio come mettere un regalo in una scatola.

3. **Boolean (Booleano)**
I booleani sono come un interruttore della luce: possono essere accesi (true) o spenti (false). Ci aiutano a dire se qualcosa è vero o no, come quando chiediamo se abbiamo finito i compiti.

4. **Object (Oggetto)**
Gli oggetti sono come delle grandi scatole che possono contenere tanti piccoli oggetti al loro interno. Ogni oggetto ha "proprietà" (come i colori o le dimensioni) e "metodi" (cose che possono fare). Ad esempio, un oggetto "auto" può avere proprietà come "colore" e "modello".

5. **Array (Array)**
Gli array sono come file di scatole in cui possiamo mettere tanti oggetti. Ogni scatola ha un numero per identificarsi. Possiamo avere una fila di numeri o parole, come una fila di caramelle di gusti diversi!

6. **Null**
Null è come una scatola vuota. Significa che non c'è niente dentro. Lo usiamo quando vogliamo dire che non c'è un valore, proprio come una scatola completamente vuota.

7. **Undefined**
Undefined è simile a null, ma significa che non abbiamo nemmeno pensato di mettere qualcosa nella scatola. È come un giocattolo che non ha mai avuto una scatola.

8. **Symbol (Simbolo)**
I simboli sono etichette speciali che possiamo mettere sugli oggetti. Ogni simbolo è unico, come un timbro speciale che non può essere replicato. Servono per identificare qualcosa di specifico senza confusione.

9. **BigInt**
Infine, BigInt è come una super scatola per numeri molto grandi! Se dobbiamo gestire numeri che superano la grandezza dei normali numeri, come quelli per contare le stelle nel cielo, usiamo BigInt.
`;
console.log(dataTypesDescription);

/* ESERCIZIO 2
 Crea una variabile chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "ChatGPT"; // Sostituisci con il tuo nome se necessario

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20.
*/
let sum = 12 + 20;
console.log(sum); // Stampa il risultato della somma

/* ESERCIZIO 4
 Crea una variabile di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "OpenAI"; // Riassegna un nuovo valore (cognome)
console.log(myName); // Stampa "OpenAI"

// Dimostriamo l'impossibilità di riassegnare una variabile con const
const myConstName = "OriginalName";

// Tentativo di riassegnazione (questo causerà un errore)
try {
    myConstName = "NewName"; // Questo darà un errore: TypeError: Assignment to constant variable.
} catch (error) {
    console.error(error.message);
}

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (che contiene il numero 12).
*/
let result = 4 - x; // Sottrazione tra 4 e x
console.log(result); // Stampa il risultato della sottrazione

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2.
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";

console.log(name1 !== name2); // Verifica che name1 sia diverso da name2

// Verifica se la loro uguaglianza diventa true quando entrambi vengono trasformati in lowercase
console.log(name1.toLowerCase() === name2.toLowerCase()); // Dovrebbe stampare true

