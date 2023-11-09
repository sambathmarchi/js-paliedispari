let reverseWord = '';
const textHTML = document.getElementById("palindroma")

function palindromo(word) {
    
    for (let i = word.length - 1; i>=0;  i--) {
        reverseWord += word[i];
    }
    

    if (word == reverseWord) {
        return true
      } else {
        return false
      }
}

const userWord = prompt("Inserisci una parola:", "Parola");
let result = palindromo(userWord)
  
if (result) {
    console.log("la parola è palindroma");
    textHTML.innerHTML = `<h1> ${userWord} (è una parola palindroma) </h1>`
    textHTML.classList.add("green")
    textHTML.classList.remove("red")
} else {
    console.log("la parola NON è palindroma");
    textHTML.innerHTML = `<h1> ${userWord} (NON è una parola palindroma) </h1>`
    textHTML.classList.add("red")
    textHTML.classList.remove("green")
}









const scelta = prompt("Scegli: Pari o Dispari?", "Pari").toLowerCase();
const userNumber = parseInt(prompt ("inserisi numero da 1 a 5", "1"))
let textPOD = document.getElementById("pod")
let textSomma = document.getElementById("somma")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let x = getRndInteger(1,5)
console.log(x);
let somma = userNumber + x
console.log(somma);
textSomma.innerHTML = `Hai scelto ${scelta}, la somma è ${userNumber} + ${x} = ${somma}`

if ((somma % 2 == 0 && scelta == "pari") || (somma % 2 !== 0 && scelta == "dispari" )) {
    console.log("Hai vinto");
    textPOD.innerHTML = "Hai vinto"
    textPOD.classList.add("green")
    textPOD.classList.remove("red")
} else {
    console.log("Hai perso");
    textPOD.innerHTML = "Hai perso"
    textPOD.classList.add("red")
    textPOD.classList.remove("green")
}



console.log(scelta);
console.log(userNumber);