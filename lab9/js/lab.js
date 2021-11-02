/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 1 November
 * License: Public Domain
 */

 //Assign output to a variable
 var outputEl = document.getElementById("output");
    console.log(outputEl);

 //create a new element and assign it to a variable
  var new1El = document.createElement("p");
    new1El = "This is the first element made in my JavaScript!";
      console.log(new1El);

  var new2El = document.createElement("p");
    new2El = "This is the second element made in my JavaScript!";
      console.log(new2El);

  var el1 = document.createTextNode(new1El);
    console.log(el1);
  var el2 = document.createTextNode(new2El);

  outputEl.appendChild(el1);
  outputEl.appendChild(br);
  outputEl.appendChild(el2);










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
