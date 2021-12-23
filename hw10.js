/***************  TASK 1 ****************/
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

/***************  TASK 2 ****************/
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [name1, name2, name3, name4], ages: [age1,age2,age3,age4]} = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26

 /***************  TASK 3 ****************/
 function mul(...rest) {
    const result = rest.reduce((fir, sec) => {
        if(isNaN(fir)) return fir = 1;
        if(isNaN(sec)) return sec = 1;
        return fir * sec;
    });
    return Number(result);
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0

 /***************  TASK 4 ****************/
 let server = {
    data: 0,
    convertToString: function(callback) {
       callback( () => {
          return this.data + "";
       });
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (callback) => {
          this.result = callback();
       }
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
  /***************  TASK 5 ****************/
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
function mapBuilder(keysArray, valuesArrays) {
    const newMap = new Map();
    for(let i = 0; i < keysArray.length; i++) {
        newMap.set(keysArray[i], valuesArrays[i]);
    }
    return newMap;
}
console.log(map.size); // 4
console.log(map.get(2)); // "span"
*/