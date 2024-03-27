let seum = document.getElementById('test');

seum.classList.add("text-primary");

seum.addEventListener('click',function(event){
    seum.classList.contains("text-end") ? seum.classList.remove("text-end") : seum.classList.add("text-end");
});

// const myName = "Jérémy";
// const lastname = "Chambres";
// let age = 28;

// seum.textContent += ". Mon nom est "+ myName + " " + lastname + " et j'ai " + age + " ans.";
//  seum.textContent += `. Mon nom est ${myName} ${lastname} et j'ai ${age} ans.`;

// let num1 = 2;
// let num2 = 5;
// let sum = num1+num2;
// let sub = num1-num2;
// let mult = num1*num2;
// let div = num1/num2;

// function add1(number){
//     return number+1;
// }

// function sub1(number){
//     return number-1;
// }
// function square(number){
//     return Math.pow(number, 2);
// }
// function cube(number){
//     return Math.pow(number, 3);
// }
// function reste(number,divide){
//     return number%divide;
// }

// console.log(add1(sum)+ "/" + add1(sub) + "/" + add1(mult) + "/" + add1(div));
// console.log(sub1(sum)+ "/" + sub1(sub) + "/" + sub1(mult) + "/" + sub1(div));
// console.log(square(sum)+ "/" + square(sub) + "/" + square(mult) + "/" + square(div));
// console.log(cube(sum)+ "/" + cube(sub) + "/" + cube(mult) + "/" + cube(div));
// console.log(reste(num1,num2));
// console.log(sum + "\n" + sub + "\n" + mult + "\n" + div);

// let age = 34;
// let age = prompt("QUel est votre age");

// if (age < 18){
//     console.log("Vous êtes un enfant");
// }
// else if(age <= 64){
//     console.log("Vous êtes un adulte actif");
// }
// else{
//     console.log("Vous avez de la chance vous!");
// }

// let array = ["Arcachon", 43, true, [1,2,3]];
// console.log(array[3][1])

// let obj = {
//     nom : "Jeremy",
//     lieu : "Arcachon",
//     age: 28,
//     fatigue: true
// }
// console.log(obj.lieu);

// let i = 0;

// while(i<5){
//     console.log(i);
//     i++;
// }

// for(let i =0; i<5;i++){
//     console.log(i);
// }

// let primeur = ['peche', 'abricot', 'pomme', 'raisin'];

// for(let i=0; i<primeur.length;i++){
//     seum.textContent += "\n" + primeur[i];
//     console.log(primeur[i]);    
// }

let myTitle = document.querySelector("h1");

// console.log(myTitle)

let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector("#unique");

p4.style.backgroundColor = "red";
// console.log(p4);

myTitle.textContent = "Mouhahahahahah";

let divChild = document.createElement("div");
divChild.textContent = "Mudada";
myTitle.appendChild(divChild);

let button1 = document.getElementById("boutonDSesMorts1");
let button2 = document.getElementById("boutonDSesMorts2");

button1.addEventListener("click", function(){
    button1.classList.contains("btn-primary") ? (button1.classList.remove("btn-primary") , button1.classList.add("btn-success"), button1.textContent = "Félicitation") :  (button1.classList.remove("btn-success") , button1.classList.add("btn-primary"), button1.textContent = "Vrai");
})
button2.addEventListener("click", function(){
    button2.classList.contains("btn-primary") ? (button2.classList.remove("btn-primary") , button2.classList.add("btn-danger"), button2.textContent = "T'es moche") :  (button2.classList.remove("btn-danger") , button2.classList.add("btn-primary"), button2.textContent = "Faux");
})
