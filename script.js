const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const changeBgBtn = document.getElementById("change-bg-btn");
const updateTextBtn = document.getElementById("update-text-btn");
const displayDiv = document.getElementById("display-div");

// Function to validate if a color is valid
function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
}

// Event listener to change background color
changeBgBtn.addEventListener("click", () => {
    const color = colorInput.value.trim();
    if (isValidColor(color)) {
        displayDiv.style.backgroundColor = color;
    } else {
        alert("Invalid color name!");
    }
});

// Event listener to update text content
updateTextBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (text === "") {
        alert("Please enter some text!");
    } else {
        displayDiv.textContent = text;
    }
});
