//задание 1
let x;
x = +prompt ('Please, enter the number')
  console.log(typeof x);

if (isNaN(x)) {
    console.log("не число")
} else if (x % 2 === 0){
   console.log('четное число')
} else if (x % 2 !== 0){
  console.log('нечетное число')
}

// подскажите, пожалуйста 6 в чем ошибка
let x;
if (isNaN(x)) {
  alert ('НЕ ЧИСЛО')
} else if  (x % 2 === 0){ 
  alert('четное число')
} else if (x % 2 !== 0){
  alert('нечетное число')
}
    

//задание 2
let x = "age";
if (typeof x === "number" || typeof x === "string" || typeof x === "boolean") { 
    console.log("x = " + typeof x);
} else {
   console.log("тип не определён");
}

//задание 3
const word = "hello";
const array = word.split("");
const reversed = array.reverse();
console.log(reversed)

//задание 4

let number = Math.random()
console.log(number)


//Задание 5
let num = [5, 10, 15, 20];

console.log(num.length);

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

//задание 6
let arr;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length ; i++){
   console.log(i === 1);
}
//пыталась сделать в таком формате, не поняла в чем ошибка
arr = ['apple', 'orange', 'peach'];
for (let i = 0 ; i < arr.length ; i++){
  console.log(i == 'apple');
}


//задание 7

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , countEven = 0, countOdd = 0, countZeroes = 0;

for (let i = 0; i < arr.length; i++){ 
  if (arr[i] % 2 === 0){
  countEven++;
  } 
  if (arr[i] % 2 !== 0){
  countOdd++;
  } 
  if (arr[i] === 0){
  countZeroes++;
  }
}
console.log(countEven)
console.log(countOdd)
console.log(countZeroes)

//задание 8

let myMap = new Map();
myMap.set ('myName', 'fenya');
myMap.set ('age', 32);
myMap.set ('sity', 'Ulan-Ude');
for (let [key, value] of myMap){
  console.log(`Ключ — ${key}, значение — ${value}`);
}