/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 1 November
 * License: Public Domain
 */

 //Assign output to a variable
 var outputEl = document.getElementById("output");
    console.log(outputEl);

 //create new elements and assign it to a variable
  var new1El = document.createElement("p");
    new1El = "This is the first element made in my JavaScript!";
      console.log(new1El);

  var new2El = document.createElement("p");
    new2El = "This is the second element made in my JavaScript!";
      console.log(new2El);

//change elements to text nodes
  var el1 = document.createTextNode(new1El);
    console.log(el1);
  var el2 = document.createTextNode(new2El);

//create empty lines
  var br = document.createElement("br");
  var br2 = document.createElement("br");

//append new elements to the 'output' div
  outputEl.appendChild(el1);
  outputEl.appendChild(br);
  outputEl.appendChild(br2);
  outputEl.appendChild(el2);
