function generateRandomNumber() {
    return Math.round(Math.random() * 10000);
}

function generatePin() {
    const randomNumber = generateRandomNumber() + "";
    if (randomNumber.length === 4) return randomNumber;
    else return generatePin();
}

document.getElementById("btn-generate").addEventListener("click", function () {
    const displayPinField = document.getElementById("display-pin");
    const randomNumber = generatePin();
    displayPinField.value = randomNumber;
});

document.getElementById("pin-btn").addEventListener("click", function (event) {
    const btn = event.target.innerText;
    const enterPinField = document.getElementById("enter-pin");
    const previousPinValue = enterPinField.value;
    if (isNaN(btn)) {
        if (btn === "<") {
            const previousPinValueArray = previousPinValue.split("");
            previousPinValueArray.pop();
            const newPinValue = previousPinValueArray.join("");
            enterPinField.value = newPinValue;
        } else if (btn === "C") {
            enterPinField.value = "";
        }
    } else {
        const newPinValue = previousPinValue + btn;
        enterPinField.value = newPinValue;
    }
});

document.getElementById("btn-submit").addEventListener("click", function () {
    const displayPinField = document.getElementById("display-pin");
    const displayPinValue = displayPinField.value;
    const enterPinField = document.getElementById("enter-pin");
    const enterPinValue = enterPinField.value;

    const failure = document.getElementById("failure");
    const success = document.getElementById("success");

    if (displayPinValue === enterPinValue) {
        success.style.display = "block";
        failure.style.display = "none";
    } else {
        success.style.display = "none";
        failure.style.display = "block";
    }
});
