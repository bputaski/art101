/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 25 October
 * License: Public Domain
 */

// sortUserName - a function that takes user input and sorts the letters of their name
 function sortUserName() {
   var userName = window.prompt("What's your name? I can give you a new one!");

   // convert to lower case
   userName = userName.toLowerCase();
   console.log("userName =", userName);

   //split string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);

   //sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);

   // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;
 }

document.writeln("Here's your brand new name: ", sortUserName(), "<br>");
