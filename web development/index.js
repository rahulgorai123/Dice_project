var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1 +".png";
var randomImagesource="images/" + randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImagesource2="images/dice" + randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player1 wins!!"
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player2 wins!!"
}
else
{
  document.querySelector("h1").innerHTML="chal draw ho gya phir se khel😒"
}
