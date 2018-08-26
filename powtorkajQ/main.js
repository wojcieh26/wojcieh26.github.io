"use strict";


function klik(){
    console.log("klik")
}


let button = document.getElementById("button");

//button.onclick = klik;

button.addEventListener("click",klik);















//1zwykla czarna 2pln
//2czarna z mlekiem 3pln
//3late 2pln
//function ekspresDoKawy(rodzajKawy, moneta) {
//  let zrobionaKawa = "";
//    let reszta = "";
//
//    if(rodzajKawy == 1){
//        zrobionaKawa = "Zwykła czarna";
//        reszta = moneta -2;
//        
//    } else if(rodzajKawy == 2){
//        zrobionaKawa = "Czarna z mlekiem";
//        reszta = moneta -3;
//        
//    } else if(rodzajKawy == 3){
//        zrobionaKawa = "late"; 
//        reszta = moneta -2;
//        
//    } else {
//         zrobionaKawa = "zły wybór";
//    }
//    
////  return [zrobionaKawa, reszta];
//    return {
//        zrobionaKawa: zrobionaKawa,
//        reszta: reszta,
//    };
//}
//
//let kawa = ekspresDoKawy(2,5);
//
//console.log(kawa);