//set up elements needed
const elements = {
    textInput: document.getElementById('textInput'),
    charicterCountOutput: document.getElementById("charicterCountOutput")
};

//make a function to incriment Count
function incrimentCount() {
 let charicterCount =  elements.textInput.value.length;
    displayCount(charicterCount);
}

//make a function to upload the event on screen 
function displayCount(count) {
    elements.charicterCountOutput.innerText = count;
}

//make a function to add event listener
function initializeApp() {
    elements.textInput.addEventListener('input', incrimentCount);
    displayCount(0);
}

//after script is read and loaded initialize app 
initializeApp();