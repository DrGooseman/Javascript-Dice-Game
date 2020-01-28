var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${randomNumber1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${randomNumber2}.png`);

var h1Text = "Draw!";
if (randomNumber1 > randomNumber2) h1Text = "🚩 Player 1 Wins!";
else if (randomNumber2 > randomNumber1) h1Text = "Player 2 Wins! 🚩";

document.querySelector("h1").innerHTML = h1Text;
