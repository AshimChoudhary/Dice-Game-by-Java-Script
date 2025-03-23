// For First one

var randomNumber1 = Math.floor((Math.random() * 6)+1);

var randomDiceImages = "dice" + randomNumber1 + ".png";

var randomImageSource = './images/' + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute('src',randomImageSource);

// For Second one here

var randomNumber2 = Math.floor((Math.random() * 6)+1);

var randomDiceImages1 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "./images/" + randomDiceImages1;

var image2 = document.querySelectorAll(".img2")[0];

image2.setAttribute('src',randomImageSource1)

// Printing that who winss

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins"
}
