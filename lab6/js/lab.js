/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 17 October
 * License: Public Domain
 */


//define variables
myTransportArray = ["car", "walking"];


myMainRide = {
  make: "Honda",
  model: "Odyssey",
  color: "Red",
  year: 2015,
  age: function() {
    return 2021 - year;
  }
}


//output
document.writeln("Kinds of transportation I use: ", myTransportArray, "</br>");
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
