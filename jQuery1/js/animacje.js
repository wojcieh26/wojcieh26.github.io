$(document).ready(function(){
  $('#show').click(function(){
//     $('#showHide').show(3000) ;
//     $('#showHide').fadeIn(3000) ;
     $('#showHide').stop(true, false).slideDown(1000)
     }) ;
  $('#hide').click(function(){
//      $('#showHide').hide(3000); 
 //     $('#showHide').fadeOut(3000) ;
      $('#showHide').stop(true, false).slideUp(1000) ;
  });          
    $('#toggle').click(function(){
//     $('#showHide').show(3000) ;
//     $('#showHide').fadeToggle(3000) ;
     $('#showHide').stop(true).slideToggle(1000) ;
  })   



    $('#animacja').animate({
    "width": "300px",
    "height": "300px",
    "background-color": "red",
    "border-radius": "50%"
    }, 5000);
    
});  
