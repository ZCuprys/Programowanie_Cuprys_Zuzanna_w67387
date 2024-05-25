
 function CzyWartosc()
{
    var imie = document.getElementById('imie').value;
    var imie_info = document.getElementById('imie_valid');

    var nazwisko = document.getElementById('nazwisko').value;
    var nazwisko_info = document.getElementById('nazwisko_valid');

    var plec_k = document.getElementById('k');
    var plec_m = document.getElementById('m');
    var plec_brak = document.getElementById('brak');
    var plec_info = document.getElementById('plec_valid');

    var email = document.getElementById('email').value;
    var email_info = document.getElementById('email_valid');

    var telefon = document.getElementById('telefon').value;
    var telefon_info = document.getElementById('telefon_valid');

    var data = document.getElementById('data').value;
    var data_info = document.getElementById('data_valid');

    var haslo = document.getElementById('haslo').value;
    var haslo_info = document.getElementById('haslo_valid');

    var haslo2 = document.getElementById('haslo2').value;
    var haslo2_info = document.getElementById('haslo2_valid');


    if (imie.length < 1)
    {
        imie_info.innerHTML = "Podaj imie";
    }
    else
    {
        imie_info.innerHTML = "";
        //IleZnak();
    }

    if (nazwisko.length < 1)
        nazwisko_info.innerHTML = "Podaj nazwisko";
    else
    {
        nazwisko_info.innerHTML = "";
        //IleZnak();
    }
        
    if((plec_k.checked == false) && (plec_m.checked == false) && (plec_brak.checked == false))
        plec_info.innerHTML = "Wybierz plec"; 
    else
        plec_info.innerHTML = "";

    if (email.length < 1)
        email_info.innerHTML = "Podaj email";
    else
    {
        email_info.innerHTML = "";
        //IleZnak();
    }

    if (telefon.length < 1)
        telefon_info.innerHTML = "Podaj numer telefonu";
    else
    {
        telefon_info.innerHTML = "";
        //IleZnak();
    }

    if(!data)
        data_info.innerHTML = "Podaj date urodzin";
    else
        data_info.innerHTML = "";

    if(haslo.length < 1)
        haslo_info.innerHTML = "Podaj haslo";
    else
    {
        haslo_info.innerHTML = "";
        //IleZnak();
    }

    if(haslo2.length < 1)
        haslo2_info.innerHTML = "Powtorz haslo"
    else
    {
        haslo2_info.innerHTML = "";
        IleZnak();
    }
}

function IleZnak()
{
    var imie = document.getElementById('imie').value;
    var imie_info = document.getElementById('imie_valid');

    var nazwisko = document.getElementById('nazwisko').value;
    var nazwisko_info = document.getElementById('nazwisko_valid');

    var email = document.getElementById('email').value;
    var email_info = document.getElementById('email_valid');

    var telefon = document.getElementById('telefon').value;
    var telefon_info = document.getElementById('telefon_valid');

    var haslo = document.getElementById('haslo').value;
    var haslo2 = document.getElementById('haslo2').value;
    var haslo2_info = document.getElementById('haslo2_valid');
    
    if (imie.length < 3)
    {
        imie_info.innerHTML = "Podaj poprawne imie";
    }
    else
    {
        imie_info.innerHTML = "";
    }

    if (nazwisko.length < 3)
    {
        nazwisko_info.innerHTML = "Podaj poprawne nazwisko";
    }
    else
    {
        nazwisko_info.innerHTML = "";
    }

    if (email.length < 3)
    {
        email_info.innerHTML = "Podaj poprawny email";
    }
    else
    {
        email_info.innerHTML = "";
    }

    if (telefon.length < 3)
    {
        telefon_info.innerHTML = "Podaj poprawny numer telefonu";
    }
    else
    {
        telefon_info.innerHTML = "";
    }

    if(!(haslo == haslo2))
    {
        haslo2_info.innerHTML = "Hasla nie pasuja do siebie"
    }
    else
    {
        haslo2_info.innerHTML = "";
        CzyMail();
    }
}

function CzyMail()
{
    let email = document.getElementById('email').value;
    var re = /\S+@\S+\.\S+/;
    if (!(re.test(email)))
    {
        alert("Podaj poprawny adres email")
    }
    else
    {
        CzyPelnoletni();
    }
}

function CzyPelnoletni()
{
    var data = document.getElementById('data').value;
    var data_info = document.getElementById('data_valid');
    const currentDate = new Date();
    const userDate = new Date(data);
    const minAgeDate = new Date();
    minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);

    if (userDate > minAgeDate) 
    {
        data_valid.innerHTML = "Tylko uzytkownicy 18+, Access Denied";
    }
    else
    {
        data_info.innerHTML = "Uzytkownik pelnoletni, Access Granted";
        CzyTrudneHaslo();
    }
}


function CzyTrudneHaslo()
{
    var haslo = document.getElementById('haslo').value;
    

    if(haslo.length < 8)
    {
        alert("Za krotkie, minimum 8 znakow");
    }
    else if (!(/\d/.test(haslo)))
    {
        alert("Haslo musi zawierac cyfre");
    }
    else
    {
        alert("Brawo, poprawnie wypelniony formularz :)")
    }
}

function validateNumber(evt) 
{
    var e = evt || window.event;
    var key = e.keyCode || e.which;

    if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
    // numbers   
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 96 && key <= 105 ||
    // Backspace and Tab and Enter
    key == 8 || key == 9 || key == 13 ||
    // Home and End
    key == 35 || key == 36 ||
    // left and right arrows
    key == 37 || key == 39 ||
    // Del and Ins
    key == 46 || key == 45) {
        // input is VALID
    }
    else {
        // input is INVALID
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    }
}