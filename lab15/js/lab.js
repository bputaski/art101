/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 30 November
 * License: Public Domain
 */



 var myUrl = "https://api.kanye.rest/";

 $("#activate").click(doAPIStuff);

 function doAPIStuff() {
   console.log("click");
   $.ajax({
     url: myUrl,
     type: "GET",
     dataType: "json",
   })
   .done(function(data){
     console.log("Success:", data);
     $("#output").append("<p>" + data.quote);
   })
   .fail(function(request,error){
     console.log(request, error);
   })
 }
