$.ajax({ 
   type : "GET", 
   url : "https://api.pubgtracker.com/profile/pc/esplito?region=eu", 
   beforeSend: function(xhr){
   	xhr.setRequestHeader('trn-api-key', '2c10d855-5cec-4169-8747-78a8ea6dd37a');
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