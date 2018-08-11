/*
function dodaj() {
    for(i=12; i>10;){
    console.log('click');
    let li = document.createElement('li');
    li.innerText = `umiejetnosc ${i}`;
    document.querySelector('li').parentElement.appendChild(li, document.querySelector('li'));
}};

document.querySelector('button').addEventListener('click', dodaj);

*/


document.querySelector('button').addEventListener('click', (dodaj=>{
    let listItem = document.createElement('li')
    let countListItems = document.getElementsByClassName('skills').length;
    listItem.innerText = 'Umiejętność'  + (countListItems + 1);
    listItem.setAttribute('class', 'skills');

    
    document.querySelector('ul').appendChild(listItem);
    
    console.log(countListItems);
    
}));

document.getElementById('delete').addEventListener('click', ()=>{
    if(document.getElementsByClassName('skills').length<=0) return;
    
    
    console.log('test');
    let listItem = document.querySelector('ul').lastElementChild;
    
    document.querySelector('ul').removeChild(listItem);
    
    
});







