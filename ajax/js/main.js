//definicja funkcji ajax
function ajax(method, url){
    
//XMLHttpRequest();
    
    let httpReq = new XMLHttpRequest();
    console.log(httpReq);
    
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
        console.log(jsonObj.userId);
    }
    httpReq.send();
    
    
}

//ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/akademia108.pl");



$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/akademia108.pl", function(data){
    console.log(data.userId);
})



























