/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 1 November
 * License: Public Domain
 */

 //Assign output to a variable
 var outputEl = document.getElementById("output");

 //create a new element and assign it to a variable
  var new1El = document.createElement("p");

 //create a parent node
  var line1 = document.createTextNode("This is the first element made in my JavaScript!");

 //append child node to parent node
  new1El.appendChild(line1);
  outputEl.appendChild(new1El);

  var new2El = document.createElement("p");

  var line2 = document.createTextNode("This is the second element made in my JavaScript!");

  new2El.appendChild(line2);
  outputEl.appendChild(new2El);










 function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
