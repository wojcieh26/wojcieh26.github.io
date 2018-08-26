$(document).ready(function(){
    $.getJSON('https://blockchain.info/pl/info/ticker', function(data){
//        console.log(data);
        $('#buy').html(data.PLN.buy);
        $('#sell').html(data.PLN.sell);
    })
//    $.ajax({
//        url: 'https://blockchain.info/pl/info/ticker',
//        type: 'GET',
//        success: function(data) {
//            console.log(data);
//        }
//    })
    
})























