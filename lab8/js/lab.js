/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 27 October
 * License: Public Domain
 */


 function isOdd(x){
     return (x % 2 != 0);
 }

//tests
console.log("Is 3 odd ", isOdd(3))
console.log("Is 8 odd ", isOdd(8))

array = [7, 23, 6, 2, 50, 15, 77]
console.log("Original array", array);

var result = array.map(isOdd);
// should be [true, true, false, false, false, true, true]
console.log("Test of whether elements of the array are odd ", result);

 var result = array.map(function(x){
     return x * 3;
 })
 // should return [21, 69, 18, 6, 150, 45, 231]
 console.log("Array multiplied by 3 ", result);
