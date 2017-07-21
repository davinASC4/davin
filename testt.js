function vaporcode(string) {
  var neww = "";
  for (i =0;i< string.length; i++){

      if (string.charAt(i) == " "){
      neww = neww + " ";
      }
      
      else {
      neww = neww + string.charAt(i).toUpperCase + " " + " ";
      
      }
  
  }
  
  console.log(neww);
}


vaporcode("Node");
