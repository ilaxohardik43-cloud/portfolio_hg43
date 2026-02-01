const texts = ["Hardik Goswami", "iOS Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = 120;
const deleteSpeed = 70;
const holdDelay = 1200;

const target = document.querySelector(".typed-text");

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        target.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, holdDelay);
        }
    } else {
        target.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
}

typeEffect();
