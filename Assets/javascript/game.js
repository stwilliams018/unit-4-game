function initialValues(){
    document.getElementById("Eme").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("Dia").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("Rub").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("Yel").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("Random").innerHTML = Math.floor(Math.random() * 50);
    document.getElementById("Score").innerHTML = 0;
    document.getElementById("Wins").innerHTML = 0;
    document.getElementById("Loses").innerHTML = 0;
    var myEme = $("Yel");
    myEme.hide();
}







