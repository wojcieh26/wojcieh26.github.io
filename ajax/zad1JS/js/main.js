function ajax(method, url){
    pobierzDane
//XMLHttpRequest();
    
    let httpReq = new XMLHttpRequest();
//    console.log(httpReq);
    
//otwarcie polaczenia
    httpReq.open(method, url);
    
    //onreadystatechange - wykonuje sie za kazdym razem kiedy zmienia sie readState
    httpReq.onreadystatechange = function(){
        
        if(httpReq.readyState == 4){
            if(httpReq.status == 200){
                let returnData = httpReq.responseText;
            
                httpReq.onsuccess(returnData);
                
                httpReq = null;
                      
            }
        }
    }
    httpReq.onsuccess = function(response){
        let jsonObj = JSON.parse(response)
        let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
        
        paragraf1.innerHTML = jsonObj.userId;
        paragraf2.innerHTML = jsonObj.userName;
        paragraf3.innerHTML = jsonObj.userUrl;
        
        
        console.log(jsonObj);
        
        
        document.body.appendChild(paragraf1);
        document.body.appendChild(paragraf2);
        document.body.appendChild(paragraf3);
    }
    httpReq.send();
    
    
}

//document.getElementById('buton').addEventListener('click', function(event){
//    pobierzDane("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/akademia108.pl");
//    
//})
function pobierzDane(){
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/akademia108.pl");
}

document.getElementById('buton').addEventListener('click', pobierzDane);
