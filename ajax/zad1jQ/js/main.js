$(document).ready(function(){
    $('#pobierzDane').click(function(){
        
        $.getJSON(
        "http://echo.jsontest.com/userID/108/userName/Akademia108/userUrl/akademia108.pl", function(data){
            console.log(data.userId);
            
            var p1 = $('<p>');
            var p2 = $('<p>');
            var p3 = $('<p>');
            
            p1.text(data.userID);
            p2.text(data.userName);
            p3.text(data.userUrl);
        
            $('body').append(p1);
            $('body').append(p2);
            $('body').append(p3);
        
        })
    })







})