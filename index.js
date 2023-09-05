var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImages = "./images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 ="./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "You win!!!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "They win!!!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}


