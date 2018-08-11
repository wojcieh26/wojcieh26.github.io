/*Węzły rodzica*/

let aboutParent = document.getElementById('about').parentElement;
console.log(aboutParent);

aboutParent.classList.add('about-container');

/*węzły dzieci*/

let allChildren = document.getElementsByTagName('ul')[0].children;
console.log(allChildren);

let lastChild = document.getElementsByTagName('ul')[0].lastElementChild;
let firstChild = document.getElementsByTagName('ul')[0].firstElementChild;




console.log(firstChild);

console.log(lastChild);

document.getElementsByTagName('ul')[0].appendChild(firstChild);

/*węzł rodzenstwa*/


let headingSibling = document.querySelector('h2').nextElementSibling;
console.log(headingSibling);

/*Modyfikacja wybranych elementow*/

for(i=0; i<allChildren.length; i+=2){
    

allChildren[i].style.marginLeft = 5 * i + 'px';
}








