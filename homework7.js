/* ****************** TASK 1 *********************/
let openTab = window.open("", "", "width=200,height=200,left=500,top=500");
setTimeout(function() {
    openTab.resizeTo(500,500);
}, 2000);
setTimeout(function() {
    openTab.moveTo(200,200);
}, 4000);
setTimeout(function() {
    openTab.close();
}, 6000);
/* ****************** TASK 2 *********************/
let button = document.getElementById('button');
let text = document.querySelector("#text");
button.addEventListener("click", changeCSS);
function changeCSS() {
    text.style.color = "orange";
    text.style.fontFamily = 'Comic Sans MS';
    text.style.fontSize = "20px";
}

/* ****************** TASK 3 *********************/
pageBlue = document.getElementById('pageBlue');
pagePink = document.getElementById('pagePink');
pageBrown = document.getElementById('pageBrown');
pageYellow = document.getElementById('pageYellow');

pageBlue.addEventListener("click", function() {
    document.body.style.background = "blue";
});
pagePink.addEventListener("dblclick", function() {
    document.body.style.background = "pink";
});
pageBrown.addEventListener("mousedown", function() {
    document.body.style.background = "brown";
});
pageBrown.addEventListener("mouseup", function() {
    document.body.style.background = "white";
});
pageYellow.addEventListener("mousemove", function() {
    document.body.style.background = "yellow";
});
pageYellow.addEventListener("mouseleave", function() {
    document.body.style.background = "white";
});
/* ****************** TASK 4 *********************/
let choose = document.getElementById('choose');
let firstName = document.getElementById("firstName");
choose.addEventListener('click', function() {
    let i = firstName.options.selectedIndex;
    firstName.options.remove(i);
});
/* ****************** TASK 5 *********************/
let liveButton = document.getElementById('liveButton');
let check = false;
liveButton.addEventListener('click', function() {
    let reaction = document.createElement('span');
    reaction.innerText = "I was pressed!";
    liveButton.after(reaction);
    check = false;
})
liveButton.addEventListener("mousemove", function() {
    let reaction = document.createElement('span');
    if(check == false) {
        reaction.innerText = "Mouse on me!";
        liveButton.after(reaction);
        check = true;
    }
})
liveButton.addEventListener("mouseleave", function() {
    let reaction = document.createElement('span');
        reaction.innerText = "Mouse is not on me!";
        liveButton.after(reaction);
        check = false;
})
/* ****************** TASK 6 *********************/
let screen = document.getElementById('screen');
function screenNow() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    screen.innerText = `Width: ${w}, Height: ${h}.`;
}
setInterval(() => {
    screenNow();
}, 500);
/* ****************** TASK 7 *********************/
let country = document.querySelector('#country');
let cities = document.getElementById('cities');
let result = document.getElementById('result');

country.addEventListener('change', function() {
    switch (this.value) {
        case 'Germany':
            while (cities.firstChild) {
                cities.removeChild(cities.firstChild);
            }
            let germanyCity = ['Berlin', 'Drezden','Munchen'];
            for(let i = 0; i<germanyCity.length; i++) {
                let opt = document.createElement('option');
                opt.value = opt.innerHTML = germanyCity[i];
                cities.appendChild(opt);
            }
            break;
        case 'Usa':
            while (cities.firstChild) {
                cities.removeChild(cities.firstChild);
            }
            let usaCity = ['Chicago', 'Las Vegas','New York'];
            for(let i = 0; i<usaCity.length; i++) {
                let opt = document.createElement('option');
                opt.value = opt.innerHTML = usaCity[i];
                cities.appendChild(opt);
            }
            break;
        case 'Ukraine':
            while (cities.firstChild) {
                cities.removeChild(cities.firstChild);
            }
            let ukrCity = ['Lviv', 'Kyiv','Odessa','Lutsk'];
            for(let i = 0; i<ukrCity.length; i++) {
                let opt = document.createElement('option');
                opt.value = opt.innerHTML = ukrCity[i];
                cities.appendChild(opt);
            }
            break;    
        default:
            break;
    }
});
cities.addEventListener('change', function() {
    result.innerText = `${country.value}: ${cities.value}`;
});    