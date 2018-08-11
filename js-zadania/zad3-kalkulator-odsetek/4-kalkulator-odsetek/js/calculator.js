function obliczZysk(k, n, m, r, podatek){
      console.log(k,n,m,r,podatek);
    
    if(podatek){
        oprocentowanieOpodatkowane = r*0.81;
    }else{
        oprocentowanieOpodatkowane = r;
    }
            
    
    let kapital = k * Math.pow(1 + (oprocentowanieOpodatkowane / m), n * m);
    
          console.log(kapital);
    
    return kapital.toFixed(2);
    
};

function oblicz(e) {
    e.preventDefault();
    
    let wplata = parseFloat(document.getElementById('wplata').value);
    let okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value);
    let iloscLat = parseFloat(document.getElementById('ilosc-lat').value);
    let oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value/100);
   /* let podatek = parseFloat(document.getElementById('podatek').value);*/
    
    let podatek = document.getElementById('podatek').checked;
    
    let wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    /*console.log(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);*/
/*    console.log(okresKapitalizacji);
    console.log(iloscLat);
    console.log(oprocentowanie);*/
    
    obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById('wynik').innerText = wynik;
    
}

document.getElementById('kalkulator').addEventListener('submit', oblicz);



































