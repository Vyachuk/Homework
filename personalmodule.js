let sayHi = function(user) {
    let time = new Date();
    let phrase;
    if(time.getHours() < 5 || time.getHours() >= 21) phrase = 'Good night';
    if(time.getHours() >= 5 && time.getHours() < 11) phrase = 'Good morning';
    if(time.getHours() >= 11 && time.getHours() < 16) phrase = 'Have a nice day';
    if(time.getHours() >= 16 && time.getHours() < 21) phrase = 'Good morning';
    return `${time} \n ${phrase}, ${user}`;
}
module.exports.sayHi = sayHi;   