/******************** TASK 1 */
let width, height;

function calcRectangleArea(width, height) {
    let area = +width * +height;
    if(isNaN(area)) {
        throw new Error("Не було введено число!");
    }
    return area;
}
try {
    let areaC = calcRectangleArea(width, height); 
    console.log(areaC);
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/******************** TASK 2 */
function checkAge () {
    let str = prompt("Скільки вам років?");
    console.log(str);
    if (str == false) {
        throw new Error("The field is empty! Please enter your age");
    }
    else if (isNaN(str)) {
        throw new Error("The field is NaN! Please enter your age");
    } 
    else if (str < 14) {
        throw new Error("You are too young!"); 
    } 
    else {
        window.location.href = "https://www.youtube.com/watch?v=m74Fdj476kk"; 
    }
} 
try {
    checkAge();
}
catch (error){
    alert(error.name + ". " + error.message);   
}

/******************** TASK 3 */
class MonthException {
    constructor(message) {
        this.name = message;
    }
    checkNumber(value) {
        if (value < 1 || value > 12) {
            throw new Error(`Incorrect month number.`);
        }
        if (isNaN(value) && value === undefined) {
            throw new Error(`The value is NaN.`);
        }
    }
}
try {
    //showMonthName(month);
}
catch(error) {
    console.log(`${error.name}: ${error.message}.`);
}
function showMonthName(month) {
    let monthException = new MonthException();
    monthException.checkNumber(month);
    let switchMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(switchMonth[month - 1]);
}    

/******************** TASK 4 */
class IdObject {
    constructor (name) {
        this.name = name;
    }
    checkId(value) {
        if (value >= 0) {
            let user = {
                id: value
            }
            return this.name = user;
        }
        if (value < 0) throw new Error(`ID must not be negative: ${value}`);
        if (isNaN(value) || value === undefined) throw new Error("Incorrect id");
        //return value; Незнаю чи потрібно повертати Value?

    }
}
const dif = [2, 12, -3, 29];
function showUser(id) {
    let objectId = new IdObject();
    //console.log(objectId.checkId(id)); 
    return objectId.checkId(id);
}
function showUsers(ids) {
    let positiveArr = ids.filter(function(item) {
        if (item < 0) console.log(`ID must not be negative: ${item}`); 
        //Незнаю як тут засунути і new Error і продовження виведення масиву(вивів просто через текст)
        else return item >= 0;
    })
    let result = positiveArr.map(function(item, index, array) {
        return showUser(item);
    }); 
    console.log(result);
}
try {
    //showUser(id);
}
catch(error) {
    console.log(`${error.name}: ${error.message}.`);
}
