/* ************* TASK 1 ***************/
function upperCase(str) {
    if(/^[A-ZА-Я]/.test(str) == true) {
        console.log("String's starts with uppercase character");
    }
    else {
        console.log("String's not starts with uppercase character");
    }
}
/* ************* TASK 2 ***************/
function checkEmail(str) {
    return /^\w+@\w+\.\w{3,6}$/i.test(str); 
}
/* ************* TASK 3 ***************/
let str = "cdbBdbsbz";
console.log(str.match(/d(b+)+(d)/i));
/* ************* TASK 4 ***************/
console.log('Java Script'.replace(/(\w+) (\w+)/, '$2, $1'));
/* ************* TASK 5 ***************/
function isCart(num) {
   let isCorrect =  /\b(\d{4}-){3}\d{4}/.test(num);
   return isCorrect;
}
/* ************* TASK 6 ***************/
function isEmail(mail) {
    let answer = /^[a-zA-Z0-9]\w+?\-?\w+?@\w+\.\w{3,6}$/i.test(mail);
    if(answer === true) console.log('Email is correct!');
    if(answer === false) console.log('Email is not correct!');
}
/* ************* TASK 7 ***************/
function checkLogin(login) {
    let reg = /^[^0-9](\w\.?){2,10}$/ig;
    let answer = reg.test(login);
    console.log(answer);
    console.log(login.match(/\d\.?\d?/g));
}