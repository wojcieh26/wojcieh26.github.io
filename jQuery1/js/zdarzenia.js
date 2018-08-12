$(document).ready(function(){
//    $('a').click(function(e){
//        
//        e.preventDefault();
//        
//        console.log(e);
//        console.log('123');
//    
//    })
    
    //metoda on() pozwala na obslue wiecej  niz jednego zdarzenia.
    
    $('a').on({
        "click": function(e) {
            e.preventDefault();
            console.log('123');
        },
        "mouseover": function(){
            $(this).css('color', 'red')
        },
        "mouseout": function(){
            $(this).css('color', 'blue')
        }
    })
    
    
    
})