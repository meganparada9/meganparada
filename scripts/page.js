const fonts = [
  "'Roboto', sans-serif",
  "'Playfair Display', serif",
  "'Smooch Sans', serif",
];
let index = 0;
const nameElement = document.getElementById("name");
const nameText = "Megan Parada";

function changeFont() {
  nameElement.style.opacity = "0"; // Fade out effect

  setTimeout(() => {
    index = (index + 1) % fonts.length; // Rotate fonts
    console.log(fonts[index]);
    nameElement.style.fontFamily = fonts[index];
    nameElement.style.opacity = "1"; // Fade back in
  }, 500); // Delay for smooth transition
}

setInterval(changeFont, 3000); // Change font every 3 seconds
