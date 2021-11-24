
//task 2
console.log("Pavlyuk");
// end task 2

//task 3
let academy = "Soft serve";
let pizzeria = "La piec";
alert(academy);
alert(pizzeria);
academy = pizzeria ;
alert(academy);
alert(pizzeria);
// end task 3

//task 4
const pizza = {
    name: "Margarita",
    size: 30,
    isDish: true,
    cookTemperature: undefined,
    cookTime: null
};
console.log(typeof pizza.name);
console.log(typeof pizza.size);
console.log(typeof pizza.isDish);
console.log(typeof pizza.cookTemperature);
console.log(typeof pizza.cookTime);
//end task 4


//task 5
let isAdult = confirm("Ви уже досягнули повнолітнього віку?");
console.log(isAdult);
//end task 5


//task 6
const user = {
    firstName: "Vyacheslav",
    lastName: "Pavlyuk",
    studyGroup: "654 JS Core",
    yearBirth: 1995
};
let isMarried = true;
console.log(user.yearBirth);
console.log(isMarried);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.studyGroup);
let driveCar = null;
console.log(driveCar);
let car;
console.log(car);
//end task 6


//task 7
let  login = prompt("Please enter your login", "User1");
let mail = prompt("Please enter your Email please", "user1@mail.box");
let password = prompt("PLease enter your password", "password");
alert('Dear '+ login + ', your email is '+ mail +', your password is '+ password + '.');
//end task 7


//task 8
let sec = 1, hour, day, month30, month31;
hour = sec * 60 * 60;
day = hour * 24;
month30 = day * 30;
month31 = month30 + day;
alert(`В одній годині є ${hour} cек.\nВ одному дні є ${day} сек.\nМісяць з 30 днів має ${month30} сек. \nМісяць з 31 дня має ${month31} сек.`);
//end task 8