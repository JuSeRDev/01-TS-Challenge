"use strict";
const button = document.querySelector(".button");
const cardName = document.getElementById("cardholder-name");
const nameCard = document.querySelector(".name-card");
cardName === null || cardName === void 0 ? void 0 : cardName.addEventListener("input", () => {
    let name = cardName.value.slice(0, 16);
    nameCard.innerHTML = name || "JANE APPLESSED";
    cardName.value = name;
});
const numberCard = document.querySelector(".number-card");
const numberInput = document.getElementById("card-number");
const monthCard = document.querySelector(".m");
const monthInput = document.querySelector(".mm");
const yearCard = document.querySelector(".y");
const yearInput = document.querySelector(".yy");
const cvcCard = document.querySelector(".card-cvc");
const cvcInput = document.getElementById("cvc");
const transform = (inputElement, character, print, start) => {
    inputElement.addEventListener("input", () => {
        var _a;
        let input = inputElement.value.replace(/\s/g, "");
        input = input.replace(/\D/g, "");
        input = input.slice(0, character);
        let formatted = ((_a = input.match(/.{1,4}/g)) === null || _a === void 0 ? void 0 : _a.join(" ")) || input;
        inputElement.value = formatted;
        print.innerHTML = formatted || start;
    });
};
transform(numberInput, 16, numberCard, "0000 0000 0000 0000");
transform(monthInput, 2, monthCard, "00");
transform(yearInput, 2, yearCard, "00");
transform(cvcInput, 3, cvcCard, "000");
const errorNumber = document.querySelector(".error-number");
const errorDate = document.querySelector(".error-date");
const errorCVC = document.querySelector(".error-cvc");
const errorActive = "error-active";
const colorRed = "var(--Red-input-errors)";
const containerConfirm = document.querySelector(".container-confirm");
const validateInput = (input, error, count, e) => {
    if (input.value.length < count) {
        e.preventDefault();
        error.classList.add(errorActive);
        input.style.borderColor = colorRed;
        return false;
    }
    else {
        error.classList.remove(errorActive);
        input.style.borderColor = "";
        return true;
    }
};
button.addEventListener("click", (e) => {
    cardName.value.length < 8 ? e.preventDefault() : null;
    validateInput(numberInput, errorNumber, 16, e);
    validateInput(monthInput, errorDate, 1, e);
    validateInput(yearInput, errorDate, 2, e);
    validateInput(cvcInput, errorCVC, 3, e);
    !document.querySelector(`.${errorActive}`) ? containerConfirm.style.display = "flex" : null;
});
