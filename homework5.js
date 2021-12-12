/* ***************** Task 1 ***************** */
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
console.log(propsCount(mentor));

/* ***************** Task 2 ***************** */
let human = {
    name: "Valera",
    age: "30",
    hair: "Dark",
    isMarried: true,
    proffesion: "Builder"
}

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

/* ***************** Task 3 ***************** */
class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + " " + this.surname;
        //console.log(`Person name is ${this.name} and surname is ${this.surname}!`);
    }
}
class Student extends Person {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return super.showFullName() + " " + midleName; 
        //console.log(`Person name is ${this.name} and surname is ${this.surname}, midle name - ${midleName}!`);
    }
    showCourse() {
        let data = new Date();
        return data.getFullYear() - this.year;
        //console.log(`Current course: ${courses}!`);
    }
}

/* ***************** Task 4 ***************** */
class Worker {
    #expirience = 1.2;
    static count = 0;
    constructor (fullName, dayRate, workingDates) {
        this.id = Worker.count++;
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDates = workingDates;
        workers.push(this.showNameSalary());
    }
    showNameSalary() {
        let salary = this.dayRate * this.workingDates * this.#expirience;
        let obj = {
            name: this.fullName,
            salary: salary
        }
        return obj;
    }
    showSalary() {
        let salary = this.dayRate * this.workingDates;
        console.log(`${this.fullName} salary: ${salary}.`);
    }
    showSalaryWithExperience() {
        let salary = this.dayRate * this.workingDates * this.#expirience;
        console.log(`${this.fullName} salary: ${salary}.`);
    }
    
    set setExp(value) {
        this.#expirience = value;
    }
    get showExp() {
        return this.#expirience;
    }
}

function sortSalary(arr) {
    console.log("Sorted salary:")
     arr.sort((a, b) => a.salary > b.salary ? -1 : 1);
     arr.forEach(element => {
         console.log(`${element.name}: ${element.salary}`);
     });
}
let workers = [];
let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);
sortSalary(workers);

/***************** Task 5 *****************/
class GeometricFigure {
    constructor(f, s) {
        this.first = f;
        this.second = s;
    }
    getArea() {

    }
    toString() {

    }
}
class Triangle extends GeometricFigure {
    constructor(f, s) {
        super(f, s);
    }
    getArea() {
        return 0.5*this.first*this.second;
    }
}
class Square extends GeometricFigure {
    constructor(f) {
        super(f);
    }
    getArea() {
        return this.first ** 2;
    }
}
class Circle extends GeometricFigure {
    constructor(f) {
        super(f);
    }
    getArea() {
        return 3.14 * (this.first ** 2);
    }
}

function handleFigures(figures) { 
    let totalSquare = 0;
    figures.reduce(function(previousValue, currentValue, i, arr) {
        let fig = figures[i];
        if (Object.getPrototypeOf(fig.constructor).name == 'GeometricFigure') {     
            let nameParent = Object.getPrototypeOf(fig.constructor).name;
            let nameClass = fig.constructor.name;
            let figureArea = fig.getArea();
            console.log(`${nameParent}: ${nameClass} - area: ${figureArea}`);
            totalSquare = totalSquare + figureArea;  
        }
    },0);
    console.log(`Total area: ${totalSquare}`);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
