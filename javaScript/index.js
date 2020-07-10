//Function plaGame()
function playGame() {
    //Ranndom Dice Image for Player I
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //randomNumber = (1-6);
    var randomDiceImg = "dice" + randomNumber1 + ".png"; //randmDiceImg = "dice(1-6).png";
    var randomImgSrc = "images/dice_images/" + randomDiceImg; //randomImgSrc = "images/dice_images/dice(1-6).png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImgSrc);

    //Ranndom Dice Image for Player II
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImgSrc2 = "images/dice_images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

    //Logic for Result
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "&#128681 PLAYER 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "PLAYER 2 Wins! &#128681";
    } else {
        document.querySelector("h1").innerHTML = "&#128681 It's A DRAW &#128681";
    }
}

// Click Event for PLAY - Button
document.querySelectorAll("button")[0].addEventListener("click", playGame);

// Click Event for RESET - Button
document.querySelectorAll("button")[1].addEventListener("click", () => {
    window.location.reload(true);
});