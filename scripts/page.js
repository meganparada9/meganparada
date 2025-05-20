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

window.addEventListener("DOMContentLoaded", () => {
  let oldX = 0,
    oldY = 0,
    deltaX = 0,
    deltaY = 0;

  const root = document.querySelector(".mwg_effect000");
  root.addEventListener("mousemove", (e) => {
    deltaX = e.clientX - oldX;
    deltaY = e.clientY - oldY;
    oldX = e.clientX;
    oldY = e.clientY;
  });

  root.querySelectorAll(".media").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const tl = gsap.timeline({
        onComplete: () => tl.kill(),
      });

      const image = el.querySelector("img");

      // Simulate movement based on mouse speed
      tl.to(image, {
        x: deltaX * 1.5,
        y: deltaY * 1.5,
        duration: 0.3,
        ease: "power3.out",
      });

      // Snap back to original position
      tl.to(image, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      // Rotation animation
      tl.fromTo(
        image,
        { rotate: 0 },
        {
          duration: 0.4,
          rotate: (Math.random() - 0.5) * 30,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        },
        "<"
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.querySelector("#text");
  textEl.style.opacity = 1;

  const words = textEl.innerText.trim().split(" ");
  textEl.innerHTML = "";

  const tempLine = document.createElement("div");
  tempLine.style.display = "inline-block";
  tempLine.style.whiteSpace = "nowrap";
  tempLine.style.visibility = "hidden";
  document.body.appendChild(tempLine);

  const lines = [];
  let currentLine = document.createElement("div");
  currentLine.className = "line";

  words.forEach((word, i) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word + " ";
    wordSpan.style.display = "inline-block";

    tempLine.appendChild(wordSpan);

    if (tempLine.offsetWidth > textEl.offsetWidth && i !== 0) {
      lines.push(currentLine);
      currentLine = document.createElement("div");
      currentLine.className = "line";
      currentLine.appendChild(wordSpan);
      tempLine.innerHTML = wordSpan.outerHTML;
    } else {
      currentLine.appendChild(wordSpan.cloneNode(true));
    }
  });

  lines.push(currentLine);
  document.body.removeChild(tempLine);

  lines.forEach((line, i) => {
    const spanWrapper = document.createElement("span");
    spanWrapper.innerHTML = line.innerHTML;
    line.innerHTML = "";
    line.appendChild(spanWrapper);
    line.style.opacity = "0";
    line.style.transform = "translateY(100%)";
    line.style.transition = "all 0.6s ease-out";
    textEl.appendChild(line);

    // Animate with stagger
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 100); // 100ms stagger
  });
});

function animateText(elementId, text, delay) {
  const element = document.getElementById(elementId);
  const lines = text.split("\n");
  let index = 0;

  function printLine() {
    if (index < lines.length) {
      element.textContent += lines[index] + "\n";
      index++;
      setTimeout(printLine, delay);
    }
  }
  element.textContent = ""; // Clear initial text
  printLine();
}

// Example usage:
const myText = `As a motivated person early in my career, it is my goal to learn as much
      as possible about the software engineering space and provide creative,
      innovative solutions to problems. Outside of work, I have many passions
      such as music, photography, food, and sports.`;

animateText("about-me", myText, 1000);

document.addEventListener(
  "DOMContentLoaded",
  animateText("text", myText, 1000)
);

const facts = [
  "I love lemons!",
  "Elephants are my favorite animal.",
  "I still use the digital camera I got in 8th grade and use it to capture my life.",
  "I love collecting random things like Sonny Angels and Jellycats.",
  "My last name often gets mistaken for the brand Prada. I am (unfortunately) not related in any way.",
  "I graduated from the University of Michigan and lived in the Ann Arbor area for most of my life.",
  "I was born in upstate New York. I'm always on the hunt for the best Buffalo wing anywhere I go.",
  "My favorite ice cream flavor is mint chocolate chip.",
  "I'm obsessed with cats.",
  "I love checking out local libraries for new books.",
  "I'm an absolute foodie. Here is a picture of my meal I had in Nashville, TN!",
  "Clue is my favorite board game ever, but the Clue movie is even better.",
];
function showOverlay(num) {
  console.log("num", num);
  console.log($("#facts-text").innerHTML);
  $(".overlay").show();
  $("#facts-text").text(facts[num]);
  $(".facts").show();
}

function closeOverlay() {
  $(".overlay").hide();
  $(".facts").hide();
}
