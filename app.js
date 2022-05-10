'use strict';
// ----------------------Select Element--------------------------//
const quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
];

const init = function () {
    const btnRandomEl = document.querySelector('#generate-random-color');
    const colorDisplayEl = document.querySelector('#color-display');
    const inputHexEl = document.querySelector('#input-hex');
    btnRandomEl.addEventListener('click', handleRandomBtn(colorDisplayEl, inputHexEl));
};
init();
////////////////////////////// function
const generateDecimalNumber = function () {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return {
        red,
        green,
        blue
    }
};
/**
 * 
 * @param {string} value 
 */
const getTwoNumber = function (value) {
    return value.length == 1 ? `0${value}` : value;
}
const generateHexCode = function (color) {
    let red = color.red.toString(16);
    let green = color.green.toString(16);
    let blue = color.blue.toString(16);
    return `#${getTwoNumber(red)}${getTwoNumber(green)}${getTwoNumber(blue)}`;
};

///////////////////////// add eventHandler
function handleRandomBtn(disColor, hexInput) {
    return function () {
        const quoteIndex = Math.floor(Math.random() * quotes.length);
        const color = generateDecimalNumber();
        const hexColor = generateHexCode(color);
        disColor.style.backgroundColor = hexColor;
        disColor.style.color = justForThis();
        hexInput.value = hexColor.toUpperCase().substring(1);
        disColor.textContent = quotes[quoteIndex];
    }
};
// just for DISPLAY TEXT
const justForThis = function () {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    let redEl = red.toString(16);
    let greenEl = green.toString(16);
    let blueEl = blue.toString(16);
    return `#${getTwoNumber(redEl)}${getTwoNumber(greenEl)}${getTwoNumber(blueEl)}`;

};