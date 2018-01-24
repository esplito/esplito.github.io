$.ajax({ 
   type : "GET", 
   url : "https://games.crossfit.com/competitions/api/v1/competitions/", 
   beforeSend: function(xhr){
    xhr.setRequestHeader("content-type", "application/json");
   },
   success : function(result) { 
       //set your variable to the result
       console.log(result); 
   }, 
   error : function(result) { 
     //handle the error 
   } 
 }); 