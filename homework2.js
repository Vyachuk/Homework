/************************* TASK 1 *************************/

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) || Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat("xy");
console.log(res4); // NaN
console.log(typeof res4); // number

/************************* TASK 2 *************************/

num = prompt("Enter a number", "0,1,2...");
if (num % 2 == 0 && num % 7 == 0) {
    alert(`Число ${num} є парним і кратне 7!`);
}
else if (num % 7 == 0) {
    alert(`${num} є число кратне 7!`);
}
else if (num % 2 == 0) {
    alert(`${num} є парне число!`);
}
else {
    alert(`${num} не є парним числом, і не кратне 7!`);
}

/************************* TASK 3 *************************/

const prop = [];
prop.push(1, "Roman", true, null);
console.log(prop.length);

propElement5 = prompt("Please enter the text");
prop.push(propElement5);
console.log(prop[4]);
prop.shift();
console.log(prop);

/************************* TASK 4 *************************/

let cities = ["Rome", "Lviv", "Warsaw"]; 
let allCities = cities[0] + "*" + cities[1] + "*" + cities[2];
console.log(allCities);

/************************* TASK 5 *************************/

isAdult = prompt("Скільки вам років?", "39");
if( isAdult >= 18 ) {
        alert("Ви досягли повнолітнього віку");
     }
     else {
        alert("Ви ще надто молоді");
}

/************************* TASK 6 *************************/

let sideA = prompt("Введіть довжину першої сторони трикутника");
let sideB = prompt("Введіть довжину другої сторони трикутника");
let sideC = prompt("Введіть довжину третьої сторони трикутника");

let p = (+sideA + +sideB + +sideC)/2;
let area = Math.sqrt(p*(p - sideA)*(p - sideB)*(p - sideC));
console.log(area.toFixed(3));

const sides = [sideA, sideB, sideC];
sides.sort(function(a,b){ 
    return a-b
  })
let katet = Math.pow(sides[0], 2) + Math.pow(sides[1], 2);
let gipotenuza = Math.pow(sides[2], 2);
  if (gipotenuza === katet) {
      alert("Трикутник є прямокутним");
  }
  else {
    alert("Трикутник не є прямокутним");
  }
console.log(sides);

/************************* TASK 7 *************************/

let date = new Date();
console.log(date.getHours());
if(date.getHours() >= 23 && date.getHours() < 5) {
    alert("Доброї ночі!")
}
if(date.getHours() >= 5 && date.getHours() < 11) {
    alert("Доброго ранку!")
}
if(date.getHours() >= 11 && date.getHours() < 17) {
    alert("Доброго дня!")
}
else {
    alert("Доброго вечора!");
}

/***** ANOTHER DECISION ******/
switch(true) {
    case date.getHours() >= 23 && date.getHours() < 5:
        alert("Доброї ночі!");
        break;
    case date.getHours() >= 5 && date.getHours() < 11:
        alert("Доброго ранку!");
        break;
        default:
    case date.getHours() >= 11 && date.getHours() < 17:
        alert("Доброго дня!");
        break;
    case date.getHours() >= 17 && date.getHours() < 23:
        alert("Доброго вечора!");
        break;
}