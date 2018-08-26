//
//let text = '{  "pracownicy" : [' +
//        '{"firstName": "Krystian", "lastName": "Dziopa"},' + 
//        '{"firstName": "Anna", "lastName": "Szapiel"},' +
//        '{"firstName": "Piotr", "lastName": "Żmuda"}]}'; 
//
//let jsonPracownicy = JSON.parse(text);
//
//console.log(jsonPracownicy);
//
//
//forEach(jsonPracownicy, console.log(jsonPracownicy.pracownicy.valueOf, jsonPracownicy.pracownicy.firstName, jsonPracownicy.pracownicy.lastName ));

let jsonPracownicy = {     
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]   
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index){
    console.log(index + ' imię:' + element.firstName + ' nazwisko:' + element.lastName);
    
    //utwórz 3 nowe elementy np. paragrafy, do pierwszego przypisz index, do drugiego przypisz imie, do trzeciego przypisz nazwisko.
//    nastepnie osadz paragrafy na stronie

    let paragraf1 = document.createElement('p');
    let paragraf2 = document.createElement('p');
    let paragraf3 = document.createElement('p');
    
    paragraf1.innerHTML = 'index: ' + index;
    paragraf2.innerHTML = 'imie: ' + element.firstName;
    paragraf3.innerHTML = 'nazwisko: ' + element.lastName;
    
    document.body.appendChild(paragraf1);
    document.body.appendChild(paragraf2);
    document.body.appendChild(paragraf3);
    
    
    
    
})





















