"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg= document.querySelector(".cat-img");

const MAX_IMAGES = 8;


let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
});

function handleYesClick() {
   titleElement.innerHTML = "Yayyy!! :)";
   buttonsContainer.classList.add("hidden");
   changeImageOnYes();
}

function changeImageOnYes() {
    catImg.src = 'https://tenor.com/view/tkthao219-capoo-cat-gif-27091725.gif';
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "Are you sure?",
        "Try Again :(",
        "Don't do this to me :(",
        "I will be very sad TT",
        "I will be very very sad",
        "You're breaking my heart...",
        "Please :(",
        ">:( Click Yes right now.",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(imageIndex) {
    catImg.src = 'https://tenor.com/view/bugcat-bugcatsticker-heart-broken-gif-12962933.gif';
}


function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}