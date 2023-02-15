function generateRandomNumber() {
    return Math.round(Math.random() * 10000);
}

function generatePin() {
    const randomNumber = generateRandomNumber() + "";
    console.log(randomNumber.length);
    if (randomNumber.length === 4) return randomNumber;
    else generatePin();
}

document.getElementById("btn-generate").addEventListener("click", function () {
    const displayPinField = document.getElementById("display-pin");
    const randomNumber = generatePin();
    displayPinField.value = randomNumber;
});
