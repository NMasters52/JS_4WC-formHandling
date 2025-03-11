//set up elements needed
const elements = {
    textInput: document.getElementById('textInput'),
    characterCountOutput: document.getElementById("characterCountOutput")
};

//make a function to incriment Count
function incrimentCount() {
 let characterCount =  elements.textInput.value.length;
    displayCount(characterCount);
}

//make a function to upload the event on screen 
function displayCount(count) {
    elements.characterCountOutput.innerText = count;
}

//make a function to add event listener
function initializeApp() {
    elements.textInput.addEventListener('input', incrimentCount);
    displayCount(0);
}

//after script is read and loaded initialize app 
initializeApp();