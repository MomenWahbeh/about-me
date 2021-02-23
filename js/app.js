'use strict';
function start(){
let user = prompt (" what\'s your name?")
let counter = 0;}
start()
alert("Welcome " + user + "  let\'s play a Guessing Game ")


let major = prompt("Did I graduated in MIS?")
if(major ==="yes" || major ==="y") {
    alert ("Great!")
}else if (major === "no" || major==="n"){
    alert("Sorry Wrong Answer!")
}else {
    alert ("Enter only yes or no")
}

let uni = prompt("Did I graduated from the UJ")
if(uni == "yes"|| uni =="y") {
    alert ("Great!")
}else if (uni === "no" || uni==="n"){
    alert("Sorry Wrong Answer!")
}else {
    alert ("Enter only yes or no")
}

let YoB = prompt("Did I born  in 1998")
if(YoB === "yes"|| YoB ==="y") {
    alert ("Sorry Wrong Answer!")
}else if (YoB == "no" || YoB =="n"){
    alert("Correct Answer!")
}else {
    alert ("Enter only yes or no")
}
let car = prompt("Do I have a car?")
if(car == "yes"|| car =="y") {
    alert ("Great!")
}else if (car == "no" || car =="n"){
    alert("Sorry Wrong Answer!")
}else {
    alert ("Enter only yes or no")
}
let Nat = prompt("Am I Jordanian?")
if(Nat == "yes"|| Nat =="y") {
    alert ("Great!")
}else if (Nat == "no" || Nat =="n"){
    alert("Sorry Wrong Answer!")
}else {
    alert ("Enter only yes or no")
}

let number = 7;
for (let i = 0; i < 5; i++) {
    let Attempts = prompt('guess a number from 1 to 15');
    if (Attempts == number) {
        alert('Good ' + 'the number is ' + number);
        counter++;
        break;
    }
    else if (Attempts > 7) {
        alert('too high');
    }
    else {
        alert('too low');
    }
    if (i == 4) {
        alert('you can not try any more');
    }

};

let Cars = ['Mercidis', 'BMW', 'Toyouta', 'Ople', 'Ford']
let correct = false;

for (let i = 0; i < 6; i++) {

    let myCar = prompt('what is the brands of cars I like ?');
    for (let j=0 ; j< Cars.length ; j++){
        if (myCar == Cars [j]) {
            alert('great'); 
            correct = true ;
            break ; 
        }
    }
    if (correct) {
        break ;
    }

}
alert('I like the following cars brands ' + Cars );

if (counter > 5) {
    alert('your score is'   + counter + 'from 5');
}

