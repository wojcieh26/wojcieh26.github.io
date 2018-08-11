/*tworzenie wezlow*/

let newListItem = document.createElement('li');
let text = document.createTextNode('umiejetnosc 13');
let elementClass = document.createAttribute('skills');


newListItem.appendChild(text);
newListItem.setAttribute('class', 'skill');

document.querySelector('ul').appendChild(newListItem);

console.log(newListItem);

/*zastepowanie elementow*/

let h3 = document.createElement('h3');
h3.innerText = 'Nowy nagłówek';

document.querySelector('p').parentElement.replaceChild(h3,document.querySelector('p'))

console.log(h3);

/*wstawianie elementow*/

let h1 = document.createElement('h1');
h1.innerText = 'nowy naglowek h1';

document.querySelector('h2').parentElement.insertBefore(h1,document.querySelector('h2'));

/*Usuń węzeł*/


document.getElementsByTagName('ul')[0].removeChild(document.getElementsByTagName('ul')[0].firstElementChild.nextElementSibling);

/*zmiana zawartosci znacznikow*/


let heading = document.querySelector('h2');

heading.innerHTML = 'My <span>skills</span>';
/*heading.outerHTML = '<p>New par</p>'*/

console.log(heading.innerText);

/*Zarządzanie atrybutami*/

console.log(document.querySelector('a').href);


document.querySelector('a').href = 'https:onet.pl'

document.querySelector('a').classList.add('link');



/*manipulacja stylami*/


document.querySelector('a').style.fontSize = '2em';

console.log(document.querySelector('input').value);


