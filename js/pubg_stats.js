$.ajax({ 
   type : "GET", 
   url : "https://api.pubgtracker.com/v2/profile/pc/esplito", 
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', '2c10d855-5cec-4169-8747-78a8ea6dd37a');},
   success : function(result) { 
       //set your variable to the result
       console.log(result); 
   }, 
   error : function(result) { 
     //handle the error 
   } 
 }); 