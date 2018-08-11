/*wyszukiwanie elementu po id*/

let section = document.getElementById('about');
console.log(section);

section.style.backgroundColor = 'pink';

/*wyszukiwanie po klasie*/

let listItems = document.getElementsByClassName('skills');
console.log(listItems);

listItems[2].style.color = 'green';


/*wyszkukiwanie po elemencie*/

let headins = document.getElementsByTagName('h2');
console.log(headins);

headins[0].style.color = 'green';


/*wyszukiwanie po selektorach*/

let firstSkill = document.querySelector('.skills');

console.log(firstSkill);


let allSkills = document.querySelectorAll('.skills');

console.log(allSkills);




