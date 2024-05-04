let a = 10;
let b = 20;
let c = 23.2;
let randInt = Math.floor(Math.random() * 101);
let iloscProb = 0

function dodawanie(a,b,c)
{
    let suma = a + b + c
    let kroki = `${a} + ${b} + ${c} = ${suma}`

    alert(kroki)
    console.log(kroki)
    document.getElementById("main_zad3").innerHTML = kroki
}

function odejmowanie(a,b,c)
{
    let roznica = a - b - c
    let kroki = `${a} - ${b} - ${c} = ${roznica}`

    alert(kroki)
    console.log(kroki)
    document.getElementById("main_zad3").innerHTML = kroki
}

function mnozenie(a,b,c)
{
    let iloczyn = a * b * c
    let kroki = `${a} * ${b} * ${c} = ${iloczyn}`
    
    alert(kroki)
    console.log(kroki)
    document.getElementById("main_zad3").innerHTML = kroki
}

function dzielenie(a,b,c)
{
    let iloraz = a / b / c;
    let kroki = `${a} / ${b} / ${c} = ${iloraz}`
    
    alert(kroki)
    console.log(kroki)
    document.getElementById("main_zad3").innerHTML = kroki
}

function parzyste()
{
    for (let i = 0; i <= 100; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i)
        }
    }
}

function pole(a,b,c)
{
    let maleP = (a + b + c) / 2
    let duzeP = Math.sqrt(maleP * (maleP - a) * (maleP - b) * (maleP - c))
    let pole = `Pole trójkąta o bokach a = ${a}, b = ${b}, c = ${c} wynosi ${duzeP}`
    console.log(pole)
    document.getElementById("main_zad5").innerHTML = pole
}

function powitanie()
{
    let imie = prompt("Podaj imie: ")
    alert(`Witaj, ${imie}!`)
}

function dodawaniewoknie()
{
    let a = parseInt(prompt("Podaj pierwszą liczbę całkowitą: "))
    let b = parseInt(prompt("Podaj drugą liczbę całkowitą: "))
    if(isNaN(a) || isNaN(b))
    {
        document.getElementById("main_zad7").innerHTML = "Nie podałeś liczb całkowitych!"
    }
    else
    {
        let suma = a + b
        let wynik = `${a} + ${b} = ${suma}`

        document.getElementById("main_zad7").innerHTML = wynik
    }
}

function zwrocMax()
{
    let a = parseFloat(prompt("Podaj pierwszą liczbę: "))
    let b = parseFloat(prompt("Podaj drugą liczbę: "))
    let c = parseFloat(prompt("Podaj trzecią liczbę: "))

    if(isNaN(a) || isNaN(b) || isNaN(c))
    {
        document.getElementById("main_zad8").innerHTML = "Nie podałeś liczb całkowitych!"
    }
    else
    {
        let tab = []
        tab.push(a)
        tab.push(b)
        tab.push(c)
        tab.sort()

        let max = tab[2]
        let wynik = `Największa z podanych liczb ( ${a}, ${b}, ${c} ) to ${max}`
        console.log(wynik)

        document.getElementById("main_zad8").innerHTML = wynik
    }
}

function zwrocNWD()
{
    let a = parseInt(prompt("Podaj pierwszą liczbę całkowitą: "))
    let b = parseInt(prompt("Podaj drugą liczbę całkowitą: "))
    if(isNaN(a) || isNaN(b))
    {
        document.getElementById("main_zad9").innerHTML = "Nie podałeś liczb całkowitych!"
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

        let wynik = `Największym wspólnym dzielnikiem liczb ${a} i ${b} jest ${tmpA}`
        document.getElementById("main_zad9").innerHTML = wynik
    }
}

function czas()
{
    let date = new Date();

    setInterval(() => {
    date.setSeconds(date.getSeconds() + 1);

    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.getElementById('main_zad10').innerText = time;
    }, 1000);
}

function graj()
{
    let proba = document.getElementById("txtLiczba").value
    
    if(proba != randInt)
    {
        if(proba > randInt)
        {
            alert("Wylosowana liczba jest mniejsza")
            iloscProb++
        }
        else
        {
            alert("Wylosowana liczba jest większa")
            iloscProb++
        }
    }
    else
    {
        alert(`Trafiono wylosowaną liczbę! Liczba prób: ${iloscProb}`)
        location.reload()
    }
}

czas()