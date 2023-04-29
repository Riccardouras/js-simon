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
function memory() {
    let listNum = [];
    for (let i = 0; i < listNum.length; i++) {
        listNum[i] = getRandomNum(minNum,maxNum);  
    }
    listNum= prompt("Inserisci i numeri visualizzati");
    if(listNum==displayNum){
        alert("Hai vinto!");
    }else{
        alert("Hai perso :(");
    }
    console.log(listNum);

}
setInterval(memory, 3100);




