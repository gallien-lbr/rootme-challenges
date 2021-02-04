#!/usr/bin/node

let hexa = '4C6520666C6167206465206365206368616C6C656E6765206573743A203261633337363438316165353436636436383964356239313237356433323465';
let str = '';

// radix = the base in mathematical numeral system
let radix = 16;

for(let i=0; i < hexa.length; i += 2){
    // method returns a string created from the specified sequence of UTF-16 code units.
    str += String.fromCharCode(parseInt(hexa.substr(i,2),radix));
}
console.log(str);