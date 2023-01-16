const inputFontSize = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputFontSize.addEventListener ('change', (event) => {
inputText.style.fontSize = `${event.target.value}px`
});