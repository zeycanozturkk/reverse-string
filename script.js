"use strict";

const inputElement = document.querySelector("#reverse");
const button = document.querySelector(".button");
const resultElement = document.getElementById("result");


button.addEventListener('click', function() {
    const inputValue = inputElement.value;
    const reversedValue = reverseString(inputValue);
    resultElement.textContent = "Reversed value: " + reversedValue;

  });

function reverseString(inputStr) {

    let charArray = inputStr.split('');

    charArray.reverse();

    let reversedStr = charArray.join('');

    return reversedStr;
};