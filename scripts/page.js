const words = [
  "Megan Parada",
  "a Software Engineer",
  "a Wolverine",
  "a Designer",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  let currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingDelay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentWord.length) {
    typingDelay = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingDelay = 500;
  }

  setTimeout(typeEffect, typingDelay);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const tooltipBox = document.getElementById("tooltipBox");

function tooltip_show_lemon() {
  $("#tooltipBoxLemon").text("About Me");
  $("#tooltipBoxLemon").css("display", "block");
  $("#tooltipBoxLemon").show();
}

function tooltip_hide_lemon() {
  $("#tooltipBoxLemon").hide();
}

function tooltip_show_lime() {
  $("#tooltipBoxLime").text("Professional Experience");
  $("#tooltipBoxLime").css("display", "block");
  $("#tooltipBoxLime").show();
}

function tooltip_hide_lime() {
  $("#tooltipBoxLime").hide();
}

function tooltip_show_grape() {
  $("#tooltipBoxGrape").text("Classwork & Projects");
  $("#tooltipBoxGrape").css("display", "block");
  $("#tooltipBoxGrape").show();
}

function tooltip_hide_grape() {
  $("#tooltipBoxGrape").hide();
}
