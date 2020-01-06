console.log("start");
let _ = require('lodash');
let lodash = _ ;
let para = document.querySelector("#para");
let arr = ["c","b","a","c","b","a"];


lodash.pull(arr, "a"); 
console.log(arr);


const reverseArr = (a) => {
lodash.reverse(a);
}
reverseArr(arr); 

para.innerHTML = arr;