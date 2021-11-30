/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 30 November
 * License: Public Domain
 */



 var myUrl = "https://api.kanye.rest/";

 $("#activate").click(doAPIStuff);

 function doAPIStuff() {
   console.log("click");

    // Using the core $.ajax() method
   $.ajax({
     // API endpoint
     url: myUrl,
     // POST or GET request
     type: "GET",
     // data type we expect back
     dataType: "json",
   })

// If the request succeeds
// data is passed back
   .done(function(data){
     console.log("Success:", data);
     $("#output").append("<p>" + data.quote);
   })

// If the request fails
   .fail(function(request,error){
     console.log(request, error);
   })
 }
