// GIVES number from 1 to 6.
var randomNumber1 = Math.floor(6 * Math.random()) + 1;

//GIVES image from 1 to 6.
var randomDiceImage = "dice" + randomNumber1 + ".png";

//OUR RANDOM image source.
var randomImageSource = "images/"+ randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);




// GIVES number from 1 to 6.
var randomNumber2 = Math.floor(6 * Math.random()) + 1;

var randomImageSource2 = "images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Decide which player wins.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  

