/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 25 October
 * License: Public Domain
 */
 function sortUserName() {
     var userName = window.prompt("What's your name? I can give you a new one!")

     userName = userName.toLowerCase();
     console.log("userName =", userName);

     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);

     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);

     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);

     return userName
 }


 function randomizeName(userName) {
     // convert userName string to an array
     var nameArray = userName.toLowerCase().split("");
     console.log("nameArray =", nameArray);
     // shuffle array with our shuffle function
     var shuffledArray = shuffleArray(nameArray);
     console.log("shuffledArray =", shuffledArray);
     var shuffledString = shuffledArray.join("");
     // shift to Title Case (like a name)
     var newName = toTitleCase(shuffledString);
     // return array to a string
     return newName;
 }

 function main() {
     var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
     document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
     var sortedName = sortUserName(userName);
     document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
     var randomName = randomizeName(userName);
     document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
     document.writeln("<div class='name'>" + randomName + "</div>")
 }
