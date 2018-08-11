/*let par1 = document.getElementsByClassName('.paragr1');
let par2 = document.getElementsByClassName('.paragr2');*/
/*let przycisk = document.getElementsByClassName('.przycisk');*/

function changeColor() {
    console.log('click');
    document.getElementsByTagName('p')[0].classList.toggle('bg-red');
    document.getElementsByTagName('p')[1].classList.toggle('bg-yellow');
};

document.querySelector('button').addEventListener('click', changeColor);