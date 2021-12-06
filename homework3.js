/********************** TASK 1 ******/
const arr = [2,3,4,5];
let sumArr = 1;
for (let i = 0; i < arr.length; i++) {
sumArr *= arr[i];
}
console.log(sumArr);

let sumArr1 = 1;
let i = 0;
while (i < arr.length) {
    sumArr1 *= arr[i];
    i++;
}
console.log(sumArr1);

/********************** TASK 2 ******/

for (let i = 0; i < 15; i++) {
    if (i == 0 || i%2 == 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
} 

/********************** TASK 3 ******/

function randomArray(k) {
    let arr = [];
    for (let i = 0; i < k ; i++) {
        let randomCount = Math.floor(Math.random() * 500);
        arr.push(randomCount);
    }
    console.log(arr);
}

/********************** TASK 4 ******/
let a = prompt();
let b = prompt();
raiseToDegree(a,b);
function raiseToDegree(a,b) {
    let sum = Number(a ** b);
    if (Number.isInteger(sum)) {
        console.log(sum);
    } else {
        console.log('Невірні дані');
    }  
}

/********************** TASK 5 ******/
findMin(78,1,0.6,-20,-4,0,3,7,32,45);
function findMin() {
    let arr = [];
    for (let i = 0; i < arguments.length ; i++) {
        arr.push(arguments[i]);
        arr.sort(function(a,b){ 
            return a-b
          })
    }
    console.log(arr);
    console.log(arr[0]);
}

/********************** TASK 6 ******/
function findUniqueArr(arr) {
    arr.sort();
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i-1] === arr[i]) {
            return false;
        } 
        if (arr[i+1] === arr.lenght) {
            return true;
        } 
    }
    return arr;
}

/********************** TASK 7 ******/
function lastElem(arr, k) {
    let result = arr.slice(-(k));
    console.log(result);
}

/********************** TASK 8 ******/
function firstRegister (str) {                              //функція підняття першої букви кожного слова
    let arr = str.split(' ');                               //перетворюємо строку в масив
    let result = arr.map(function(item, index, array) {     //перебираємо масив і записуємов result
        return item[0].toUpperCase() + item.slice(1);       //повертаємо велику першу букву кожного елемента масива + продовження елемента
    }); 
    console.log(result.join(' '));                          //виводим в консоль результат масива у вигляді строки.
}
