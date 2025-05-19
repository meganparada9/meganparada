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

function rightFact() {
  if ($("#number").text() == 3) {
    return;
  }
  // hide the previous one
  var next_fact = "#fact" + (Number($("#number").text()) + 1);
  var current_fact = "#fact" + Number($("#number").text());
  console.log(next_fact);
  $(current_fact).hide();
  $(next_fact).show();
  $("#number").text(Number($("#number").text()) + 1);
}

function leftFact() {
  if ($("#number").text() == 1) {
    return;
  }
  // hide the previous one
  var next_fact = "#fact" + (Number($("#number").text()) - 1);
  var current_fact = "#fact" + Number($("#number").text());
  console.log(next_fact);
  $(current_fact).hide();
  $(next_fact).show();
  $("#number").text(Number($("#number").text()) - 1);
}
