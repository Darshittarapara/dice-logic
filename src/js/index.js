const diceImgOne = document.querySelector("#diceImgOne");
const diceImgTwo = document.querySelector("#diceImgTwo");
const randomDiceNumber = document.querySelector("#randomDiceNumber");
const diceOneNumber = document.querySelector(".diceOne__number");
const randomDiceNumberOneDigit = document.querySelector(".randomDiceNumberOneDigit");
const randomDiceNumberTwoDigit = document.querySelector(".randomDiceNumberTwoDigit");

const DICE_NUMBERS = [1, 2, 3, 4, 5, 6];
let currentDiceOneNumber = 6;
window.addEventListener('load', () => {
    diceImgOne.src = `../../images/${currentDiceOneNumber}.png`;
    diceImgTwo.src = `../../images/${currentDiceOneNumber}.png`;
});

/**
 * This funtion generate random dice number
*/
const generateRandomDiceNumber = () => {
    const filterDiceNumberList = DICE_NUMBERS.filter((item) => item !== currentDiceOneNumber)
    const randomNumber = filterDiceNumberList[Math.floor(Math.random() * filterDiceNumberList.length)];
    currentDiceOneNumber = randomNumber;
    return randomNumber
}
/**
 * Handle first dice change
 */
const changeDiceOneContainer = () => {
    const diceNumber = generateRandomDiceNumber();
    diceImgOne.classList.toggle("rotateDiceOne")
    diceImgOne.src = `../../images/${diceNumber}.png`;
    randomDiceNumberOneDigit.innerHTML = `Dice one number ${diceNumber}`
    diceImgOne.disabled = true
}

/**
 * Handler second dice change
 */
const changeDiceTwoContainer = () => {
    const diceNumber = generateRandomDiceNumber();
    diceImgTwo.classList.toggle("rotateDiceOne");
    diceImgTwo.src = `../../images/${diceNumber}.png`;
    randomDiceNumberTwoDigit.innerHTML = `Dice two number ${diceNumber}`
    diceImgTwo.disabled = true
}

diceImgOne.addEventListener("click", changeDiceOneContainer);
diceImgTwo.addEventListener("click", changeDiceTwoContainer);
