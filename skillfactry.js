
//Задание 1.
let data = prompt();
let dataUnar = +data;

if (dataUnar !== dataUnar) {
  console.log('Упс, кажется, вы ошиблись');
} else if (dataUnar % 2 == 0){
  console.log(`Число ${dataUnar} четное`);
}else {
  console.log(`Число ${dataUnar} не четное`)
}

//Задание 2.
let x = 22;
if (typeof x === "number"){
  console.log(`${x} это число`);
} else if (typeof x === 'string') {
  console.log(`${x} это строка`);
} else if (typeof x === 'boolean') {
  console.log(`${x} это логический тип`)
} else {
  console.log(`Тип данных ${x} не определен`);
};

//Задание 3.
let str = "Hello";
let reverse = str.split("").reverse().join("");
console.log(reverse) */

//Задание 4
function getRandom(max){
  return Math.floor(Math.random() * max)
};
console.log(getRandom(101));

//Задание 5.
const massive = [32, 32, 33, 41, 44];

let result = massive.map(function(item){
  console.log(massive.length)
  return item
});

console.log(result)

//Задание 6.
const massive = [33, 33, 33];
let flag = true;

for(let i = 0; i < massive.length; i++){
  if(massive[0] !== massive[i]){
    flag = false;
  } 
};
console.log(flag);


//Задание 7.
let massive = [1, 2, 3, 4, null, "gdshghj", alert, null];
let counterEven = 0;
let counterOdd = 0;
let counterOther = 0;

for (let i =0; i < massive.length; i++){
  if (typeof massive[i] === "number" || typeof massive[i] === "object") {
    if(massive[i] === null){
      counterOther++;
    } else if (massive[i] % 2 != 0) {
      counterOdd++
    } else if (massive[i] % 2 == 0) {
      counterEven++
    };
  }
}
console.log(`Четных чисел: ${counterEven},\nНечетных чисел: ${counterOdd}, \nОстальные: ${counterOther}`)


//Задание 8.
let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"]

]);

for (let name of fruits){
  console.log(`Ключ - ${name[0]} \nЗначение - ${name[1]}`)
}

