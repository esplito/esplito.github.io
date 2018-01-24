$.ajax({ 
   type : "GET", 
   url : "https://ypzgtalo10.execute-api.us-east-1.amazonaws.com/prod/CrossfitOpen2017", 
   beforeSend: function(xhr){
    
   },
   success : function(result) { 
       //set your variable to the result
       console.log(result); 
   }, 
   error : function(result) { 
     //handle the error 
   } 
 }); 