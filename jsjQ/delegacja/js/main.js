document.addEventListener('click', function(event) {
    if (event.target.tagName !== 'BUTTON'){
        return;
    } 
    
    
  //  console.log(event);
    //napisz obsluge dodawania tresci z buttonow do paragrafu o id "result"

//    "result"
    
    console.log(event.target.innerHTML);
    
    document.getElementById('result').innerHTML += event.target.innerHTML;
    
})




