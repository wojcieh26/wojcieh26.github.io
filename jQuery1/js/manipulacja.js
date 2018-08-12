$(document).ready(function(){
//    metody .text() i .html
    console.log($('#first').text());
    
    console.log($('#first').html());
    
    $('#first').text('12312312412321');
    $('#first').html('<p>12312312412321</p>');
    
    //metody dodające tresic .append(), .prepend(), .before(), after() - można wstawiać znaczniki html
    $('#paragraf').append(' <span>dodany metoda append()</span>');
    $('#paragraf').prepend('<span>dodany metoda prepend() </span>');
    $('#paragraf').before('<span>dodany metoda before() </span>');
    $('#paragraf').after('<p>dodany metoda after() </p>');
    
//    metody empty() i remove()
    $('#paragraf').empty();
    $('#paragraf').remove();
    
    //metoda .css()
    $('#first').css({
        "width": "20%",
        "height": "150px",
        "background-color": "violet"
        
    });
    
    //metoda .val()
    console.log($('#formularz input').val('lorem'));
       
})

$(window).scroll(function(){
    console.log($(this).scrollTop());
    console.log($('#main-nav').outerHeight());
    
    if($(this).scrollTop() >= $('#main-nav').outerHeight()){
        $('#main-nav').addClass('affix');
    }else 
        $('#main-nav').removeClass('affix');
    }
)


































