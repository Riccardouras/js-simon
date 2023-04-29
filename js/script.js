//elemento dom in cui inserire i 5 num
const num = document.getElementById("number");
//variabile con il numero massimo 
let maxNum = 99;
let minNum=0;
//richiamo la funzione che genera numeri casuali
getRandomNum()
//creo funzione che genera numeri casuali
function getRandomNum(min,max) {
        min = parseInt(min);
        max = parseInt(max);
        return Math.floor(Math.random() * ((max + 1) - min) + min)
}
//controllo il valore al suo interno
console.log("questo è" ,getRandomNum(minNum,maxNum));
//genero array vuoto
function displayNum(){
let array = [];
//ciclo per inserire 5 numeri nell'array
for (let index = 0; index < 5; index++) {
//imposto array con indice che va da 0 a 4 in cui inserisco la funzione per num random con min 0  e max 99
    array[index] = getRandomNum(minNum,maxNum);
    //genero variabile per interagire col dom
    let createEl= document.createElement("h1")
    createEl.innerHTML+= array[index]
    //controllo sia tutto ok
    console.log(createEl)
    //promemoria: metti script sotto pagina senno' smadonni con l'appendChild
    num.appendChild(createEl);
}
//utile per distinguere i console log
console.log("allora questo",array);
}
displayNum(setTimeout)
setTimeout(()=>{
    let displayNone = num;
    displayNone.style.display='none';
},3000)
setInterval(memory, 3100);
function memory(array) {
    /* tentativo 1 = ho ciclato per l' listNum.lenght e non va
       tentativo 2 = ciclo per 5 ma la lista di elementi rimane undefined
       tentativo 3 = ho provato ad inserire un parseInt, ma a seconda di
       come lo imposto prende solo il primo valore o l'ultimo
       tentativo 4 = usare lo split, mi restituisce comunque una stringa
       tentativo 5 =  usare il + davanti al messaggio del prompt, continua
       a darmi una stringa in piu' annulla il messaggio del prompt scrivendo
       NaN
       tentativo 6 = tolgo il prompt dal ciclo restituisce comunque una stringa 
       tentativo 7 = uso il map() o non riesco a concatenarlo oppure non funziona*/
    let listNum = [];
    for (let i = 0; i < 5; i++) {
        listNum[i] = array;
        listNum.push(parseInt(prompt("Enter a number")))
    }
    if((listNum)==array){
        alert("Hai vinto!");
    }else{
        alert("Hai perso :(");
    }
    console.log(listNum);
}





