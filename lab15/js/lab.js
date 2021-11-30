/*
 * Author: Ben Putaski <bputaski@ucsc.edu>
 * Created: 15 November
 * License: Public Domain
 */

 /*
  * Author: Wes Modes <wmodes@csumb.edu>
  * Created: 19 September
  * License: Public Domain
  */

 var apiEndpoint = "https://api.chucknorris.io/jokes/random";
 var myUrl = "https://api.kanye.rest/";

 $("#api-button").click(doAPIStuff);

 function callAjax() {
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

 $("#my-button").click(callAjax);
