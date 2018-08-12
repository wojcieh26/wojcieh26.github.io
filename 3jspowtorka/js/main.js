//po kliknieciu w #red, main-nav ma dostac klase "affix"


document.getElementById('red').addEventListener('click',function(event){
    event.stopPropagation();
    document.getElementById('main-nav').classList.toggle('affix');
    
})

document.body.addEventListener('click',function(){
        document.getElementById('main-nav').classList.remove('affix');

})

document.getElementById('main-nav').addEventListener('click', function(event){
    event.stopPropagation();
})