var randomnum1 = Math.random();
var dicenum1 = Math.floor(randomnum1*6+1)

var imgnum1 = "dice"+dicenum1+".png";
var imgloc1 = "images/"+imgnum1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imgloc1);

// ---------------------------------------------

var randomnum2 = Math.random();
var dicenum2 = Math.floor(randomnum2*6+1)

var imgnum2 = "dice"+dicenum2+".png";
var imgloc2 = "images/"+imgnum2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", imgloc2);

//---------------------------------------------

if(dicenum1>dicenum2){
    document.querySelector("h1").innerHTML = "Player 1 Won!!";
}
else if(dicenum1<dicenum2){
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}