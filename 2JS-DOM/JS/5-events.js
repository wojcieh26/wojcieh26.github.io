let heading = document.querySelector('h2');


function changeColor() {
    console.log(this);
    this.style.color = 'orange';
}
/*
heading.onclick = changeColor;
    document.querySelector('ul').onclick = changeColor;
*/

heading.addEventListener('click', changeColor);

heading.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink';
});

document.querySelector('ul').addEventListener('click', function () {
    this.style.color = 'red';
    heading.removeEventListener('click', changeColor);
});

/*Blokowanie domyślnych zdarzeń i propagacji*/

let link = document.querySelector('a');

document.body.addEventListener('click', function(){
    this.style.backgroundColor = 'gray';
})

link.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    this.style.backgroundColor = 'red';
})












