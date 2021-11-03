/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 3 November
 * License: Public Domain
 */


 // sortUserName - a function that takes user input and sorts the letters of their name
  function sortUserName(userName) {

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

  button = document.getElementById('my-button');
//  inputEl = document.getElementById('user-name');
  outputEl = document.getElementById("output");

  //have the button run the fuction
  button.addEventListener('click', function(){
    //get value from name element
    var userName = document.getElementById('user-name').value;
    
    var outputValue = document.getElementById('output');
    var newEl = document.createElement("p");
    newEl.innerHTML = "Sorted Name: " + sortUsername(userName);
    outputValue.appendChild(newEl);

    //modify value by running the function
    var newName = sortUserName(userName);
    //put new value in output
    outputEL.innerHTML = "<p>" +  newName + "</p>";
  });
