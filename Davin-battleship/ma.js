function rockBottom(arr) {
  var sub = "";
  for (i=0; i<arr.length; i++){
    if (arr.charAt(i)==" "){
        sub = sub + "PLHHHH";
      } 
    else{
      sub = sub + arr.charAt(i);
      }
      
    }
    
   console.log(sub)
  
}

rockBottom("Hello World");