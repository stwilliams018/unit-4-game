var ruby = Math.floor(Math.random() * 10);
var emerald = Math.floor(Math.random() * 10);
var diamond = Math.floor(Math.random() * 10);
var YellowGemstone = Math.floor(Math.random() * 10);
var Random = Math.floor(Math.random() * 120);
var Score = 0;
var Wins = 0;
var Losses = 0;

function initialValues(){
    document.getElementById("Random").innerHTML = Random ;
    document.getElementById("Score").innerHTML = Score ;
    document.getElementById("Wins").innerHTML = Wins ;
    document.getElementById("Losses").innerHTML = Losses ;
}

function reset (){
    ruby = Math.floor(Math.random() * 10);
    emerald = Math.floor(Math.random() * 10);
    diamond = Math.floor(Math.random() * 10);
    YellowGemstone = Math.floor(Math.random() * 10);
    Random = Math.floor(Math.random() * 120);
    Score = 0;
    document.getElementById("Random").innerHTML = Random ;
    document.getElementById("Score").innerHTML = Score ;
}

$(document).ready(function(){


$("#Ruby").on("click", function() {
    Score = parseInt(ruby) + parseInt(Score);
    document.getElementById("Score").innerHTML = Score ;

    if (Score === Random) {
        Wins ++;
        document.getElementById("Wins").innerHTML = Wins ;
        alert("you win");
        reset()
    }
    else if (Score > Random) {
        Losses ++;
        document.getElementById("Losses").innerHTML = Losses ;
        alert ("You Lose");
        reset()
    }
});
$("#Diamond").on("click", function() {
    Score = parseInt(diamond) + parseInt(Score);
    document.getElementById("Score").innerHTML = Score ;

    if (Score === Random) {
        Wins ++;
        document.getElementById("Wins").innerHTML = Wins ;
        alert("you win");
        reset()
    }
    else if (Score > Random) {
        Losses ++;
        document.getElementById("Losses").innerHTML = Losses ;
        alert ("You Lose");
        reset()
    }
});

$("#Emerald").on("click", function() {
    Score = parseInt(emerald) + parseInt(Score);
    document.getElementById("Score").innerHTML = Score ;

    if (Score === Random) {
        Wins ++;
        document.getElementById("Wins").innerHTML = Wins ;
        alert("you win");
        reset()
    }
    else if (Score > Random) {
        Losses ++;
        document.getElementById("Losses").innerHTML = Losses ;
        alert ("You Lose");
        reset()
    }
});

$("#Yellow").on("click", function() {
    Score = parseInt(YellowGemstone) + parseInt(Score);
    document.getElementById("Score").innerHTML = Score ;

    if (Score === Random) {
        Wins ++;
        document.getElementById("Wins").innerHTML = Wins ;
        alert("you win");
        reset()
    }
    else if (Score > Random) {
        Losses ++;
        document.getElementById("Losses").innerHTML = Losses ;
        alert ("You Lose");
        reset()
    }
});



})

console.log(ruby)
console.log(diamond)
console.log(emerald)
console.log(YellowGemstone)
console.log(Score)






