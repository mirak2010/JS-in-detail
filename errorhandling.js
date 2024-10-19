try {
    addalert("Hello")
   
}

catch(err){
    document.getElementById("error_message").innerHTML=err.message;
    
}