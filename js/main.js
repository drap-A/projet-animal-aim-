console.log('papa');

//jhghftytfgf


/*variable
test
*/

//document.getElementById('container').innerHTML = "je suis la!!!";

var lettre;
console.log(lettre);
var number = 50;
console.log("la valeur de la variable: " + number);
var animal = "cheval";

/*
var age =prompt('quel est ton age?');
document.getElementById('container').innerHTML = age;

alert(animal);
*/

// nombres en javascript
var num1 = 15;
console.log(num1);

num1 ++; // l'incrementation
console.log(num1);

num1--; // decrementation
console.log(num1);

// les operations: l'addition¨+ , la multiplication *, la soustraction -, la division /, le modulo %

console.log(5 % 5);

// function 

function affichage(){
    alert('paul est bien');
}

affichage();

function addition(num1,num2) {
    return num1 + num2;
}

console.log(addition(5,2));

document.getElementById('container').innerHTML = addition(4,5);

// les boucles: while loops and for ; 
// while loops
var num = 0;
while(num < 100) {
    num += 1;
    console.log(num);
}

// for
for (let num1 = 5; num1 < 25; num1++){
    console.log(num1);
}

var pi = 3.14;
pi += 15;
console.log(pi);

// data types
let yourAge = 15; // number
let yourName = 'bob'; // string "" ''
let name = {first:'jane', last:'doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banae', 'oranges']; // array
let random; // undefined;
let nothing = null; // value null

// methods de string

var fruit="mangue";
console.log(fruit.length);

console.log(fruit.toUpperCase());
console.log(fruit.toLocaleLowerCase());
console.log(fruit.indexOf('g'));
console.log(fruit.slice(0,2));
console.log(fruit.replace('e','s'));
console.log(fruit.charAt(2));

// les tableaux
let climat = ['tropique','équatorial','humide'];

console.log(climat[2]);

for(let i = 0; i < climat.length; i++) {
    console.log(climat[i]);
}

// les methodes du tableau
//console.log(climat.toString());
console.log(climat.join('*'));
console.log(climat.pop(), climat);
console.log(climat.push('sec'), climat);
console.log(climat.shift());
console.log(climat.unshift('arctique'));

// les conditions :if else if
var number = '10';

if(number === 10) {
    alert('nombre' + number);
}

if (number !== 10){
    alert('erreur')
};
 