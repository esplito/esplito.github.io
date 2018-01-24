$.ajax({ 
   type : "GET", 
   url : "https://openg.azurewebsites.net/api/leaderboard?division=1&sort=0&region=0&stage=5&year=16&page=1&numberperpage=100&scaled=0&occupation=0", 
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