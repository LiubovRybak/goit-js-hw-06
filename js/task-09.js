const container = document.querySelector('.widget');
const colorBackground = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonColor.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    container.getElementsByClassName.backgroundColor = randomColor;
    colorBackground.textContent = randomColor;
});