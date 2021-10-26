/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 25 October
 * License: Public Domain
 */
 function sortUserName() {
     var userName = window.prompt("Hi, Please tell me your full name so I can fix it.");

     console.log("userName =", userName);

     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);

     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);

     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);

     return nameSorted;
 }

document.writeln("Here's your brand new name: ". sortUserName(), "<br>");

// sortUserName - a function that takes user input and sorts the letters of their name



// output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "<br>");
