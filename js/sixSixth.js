const inputText = document.querySelector("#validation-input");
const length = Number(inputText.dataset.length);

inputText.addEventListener("blur", (event) => {
    if (event.currentTarget.value.trim().length === length) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");
    } else {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
    }
});
    
