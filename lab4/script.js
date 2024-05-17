
for (let i = 10; i > 0; i--) {
    console.log("Odliczanie: ", i);
}
console.log("Happy New Year!");

let j = 10;
while (j >= 0) {
    console.log("Odliczanie", j);
    j--;

}

let sil = parseInt(prompt("Podaj liczbe calkowita: "))
function SilniaArg(sil){
    
    if (sil == 0 || sil == 1) return 1;
       else {
         return sil * SilniaArg(sil-1)
    }
        
}
    alert(SilniaArg(sil)) 




const wiek = parseInt(prompt("Ile masz lat?"));

function CzyPelnoletni(n){
    if (n >= 18) return true;
        else {
            window.open("", "_self");
    }
}
CzyPelnoletni(wiek)


function ZmienTlo(btn){
    przyciski=document.getElementsByClassName("btn-ex4")
    console.log
    przyciski.forEach(przycisk => {
        przycisk.style.backgroundColor = '';
    });
    btn.style.backgroundColor = "";
}


let list = []

function Zniknij()
{
    document.getElementById("Zniknij").style.opacity = "0.5"
}



function dodajDoListy()
{
    let item1 = document.getElementById("txt6").value
    let item2 = document.getElementById("txt7").value

    //list.push(item)
    //console.log(list)

    let table7 = document.getElementById("tab7")
    let row = table7.insertRow(1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)

    cell1.innerHTML = item1
    cell2.innerHTML = item2
}

function CtoF()
{
    let c = parseFloat(prompt("Podaj temperaturę w Celsjuszasz: "))
    let f = c * 1.8 + 32

    if(isNaN(c))
    {
        document.getElementById("main_zad8").innerHTML = "Nie podano liczby"
    }
    else
    {
        let wynik = `${c} *C to ${f} *F`
        document.getElementById("main_zad8").innerHTML = wynik
    }
}

function FtoC()
{
    let f = parseFloat(prompt("Podaj temperaturę w Farenhaitach: "))
    let c = (f - 32) / 1.8

    if(isNaN(f))
    {
        document.getElementById("main_zad8").innerHTML = "Nie podano liczby"
    }
    else
    {
        let wynik = `${f} *F to ${c} *C`
        document.getElementById("main_zad8").innerHTML = wynik
    }
}

function zwrocNWD()
{
    let a = document.getElementById("zad9_liczba1").value
    let b = document.getElementById("zad9_liczba2").value
    if(isNaN(a) || isNaN(b))
    {
        document.getElementById("main_zad9").innerHTML = "Nie podano liczb całkowitych!"
    }
    else
    {
        let tmpB = b
        let tmpA = a
        while (tmpB != 0) 
        {
            temp = tmpB;
            tmpB = tmpA % tmpB;
            tmpA = temp;
        }

        let wynik = `NWD = (${a}, ${b}) = ${tmpA}`
        document.getElementById("main_zad9").innerHTML = wynik
    }
}

function dodawanie()
{
    let a = parseFloat(document.getElementById("zad10_liczba1").value)
    let b = parseFloat(document.getElementById("zad10_liczba2").value)
    let suma = a + b
    let kroki = `${a} + ${b} = ${suma}`

    document.getElementById("main_zad10").innerHTML = kroki
}

function odejmowanie()
{
    let a = document.getElementById("zad10_liczba1").value
    let b = document.getElementById("zad10_liczba2").value
    let roznica = a - b
    let kroki = `${a} - ${b} = ${roznica}`

    document.getElementById("main_zad10").innerHTML = kroki
}

function mnozenie()
{
    let a = document.getElementById("zad10_liczba1").value
    let b = document.getElementById("zad10_liczba2").value
    let iloczyn = a * b
    let kroki = `${a} * ${b} = ${iloczyn}`
    
    document.getElementById("main_zad10").innerHTML = kroki
}

function dzielenie()
{
    let a = document.getElementById("zad10_liczba1").value
    let b = document.getElementById("zad10_liczba2").value
    let iloraz = a / b
    let kroki = `${a} / ${b} = ${iloraz}`
    
    document.getElementById("main_zad10").innerHTML = kroki
}