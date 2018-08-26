function ajax(method, url){
    
    let httpReq = new XMLHttpRequest();
//    console.log(httpReq);
    
    httpReq.open(method, url);

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
        
        for(let i=0; i < jsonObj.length; i++){
            let paragraf1 = document.createElement('p');
            let paragraf2 = document.createElement('p');
            let paragraf3 = document.createElement('p');
            
            paragraf1.innerHTML = 'User ID: ' + jsonObj[i].id;
            paragraf2.innerHTML = 'User Name: ' + jsonObj[i].name;
            paragraf3.innerHTML = 'User Website: ' + jsonObj[i].website;
            
            document.body.appendChild(paragraf1);
            document.body.appendChild(paragraf2);
            document.body.appendChild(paragraf3);
            
            
            for(let key in jsonObj[i]){
//                let paragraf[i] = document.createElement('p');
//                paragraf
                console.log(jsonObj[i][key]) //mozna tez dac document.body.appendchild(paragraf4) itd.
             }
        }
    }
    httpReq.send(); 
}


window.addEventListener('scroll', function(){
    
let wheight = window.innerHeight;
let scrolled = this.pageYOffset;
let documenth = document.documentElement.offsetHeight;    
    
    if(wheight + scrolled == documenth){
        
        ajax('get', "https://jsonplaceholder.typicode.com/users")


    } 
})
