/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 3 November
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

  buttonEl = document.getElementById("my-button");
  console.log("button element:", buttonEl);
  // find the form element
  inputEl = document.getElementById("user-name");
  console.log("input element:", inputEl);
  // find output element
  outputEl = document.getElementById("output");
  console.log("output element:", outputEl);



  //have the button run the fuction
  buttonEl.addEventListener('click', function(){
  // sortUserName - a function that takes user input and sorts the letters of their name
  function sortUserName() {
    var userName = document.getElementById("user-name").value;
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
  outputEL.innerHTML = "<p id=name-results>" +  nameSorted + "</p>";
 });
