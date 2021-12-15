/***** ***** ***** ***** TASK 1 ***** ***** ***** *****/
let number = document.querySelector("body div");
number.innerHTML = "Last";
let number2 = document.getElementById("test");
number2.innerHTML = "Last";

/***** ***** ***** ***** TASK 2 ***** ***** ***** *****/
let img = document.querySelector(".image").src = 'cat.jpg';
alert(`Picture now is: ${img}`);

/***** ***** ***** ***** TASK 3 ***** ***** ***** *****/
let container = document.querySelectorAll("#text p");
console.log(`Selector text 0: ${container[0].textContent}`);
console.log(`Selector text 1: ${container[1].textContent}`);
console.log(`Selector text 2: ${container[2].textContent}`);

/***** ***** ***** ***** TASK 4 ***** ***** ***** *****/
let listUl = document.querySelectorAll("#list ol");
console.log(listUl[0].textContent, listUl[4].textContent, listUl[1].textContent, listUl[3].textContent, listUl[2].textContent);
let list = document.getElementById('list');
let child = [];
for (let i = 0; i <list.children.length; i++) {
    child[i] = list.children[i].textContent;
}
console.log(child[0], child[4], child[1], child[3], child[2]);

/***** ***** ***** ***** TASK 5 ***** ***** ***** *****/
document.querySelector("h1").style.backgroundColor = "lightgreen";

let parag = document.getElementById('myDiv');
parag.children[0].style.fontWeight = "bold";
parag.children[1].style.color = "red";
parag.children[2].style.textDecoration = "underline";
parag.children[3].style.fontStyle = "italic";

let listing = document.getElementById('myList');
//let elements = listing.getElementsByTagName('li');
listing.style.display = "flex";
listing.style.listStyleType = "none";

listing.nextElementSibling.style.display = "none";

/***** ***** ***** ***** TASK 6 ***** ***** ***** *****/
let text1 = document.getElementById("input1").value = prompt("Please enter the text 1");
console.dir(text1);
let text2 = document.getElementById("input2").value = prompt("Please enter the text 2");
console.dir(text2);

document.getElementById("input1").value = text2;
document.getElementById("input2").value = text1;

/***** ***** ***** ***** TASK 7 ***** ***** ***** *****/
let body = document.querySelector('body');
let main = document.createElement("main");
main.className = "mainClass check item";
body.insertBefore(main, document.querySelector('script'));

let div = document.createElement('div');
div.id = "myDiv";
main.appendChild(div);

let p = document.createElement('p');
p.innerText = "First paragraph";
div.appendChild(p);