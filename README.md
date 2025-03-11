# Character Counter App

## Overview
This simple web application counts and displays the number of characters as you type. It was created as part of a 4-week coding challenge during my lunch breaks, using only an iPad and GitHub Codespaces.

![Character Counter Screenshot](https://via.placeholder.com/600x400)

## Week 2 Tuesday: Form Handling
This project demonstrates basic form handling in JavaScript, including:
- Event listening
- DOM manipulation
- Real-time updates

## How It Works
1. The app listens for input events on a text field
2. As the user types, it counts the number of characters
3. The character count is displayed in real-time

## Project Structure
```
.
├── index.html       # Main HTML structure
├── styles.css       # CSS styling (not shown in current code)
└── script.js        # JavaScript functionality
```

## Code Highlights

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Webpage</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>JS 4 Week Challenge. Week 2 Tuesday. Form Handling.</h1>
  <div>
    <form>
      <label for="text">Start Typing Here:</label>
      <input type="text" id="textInput">
    </form>
    <div>
      <h5>Your character count is:</h5>
      <p id="characterCountOutput">0</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### JavaScript Functionality
```javascript
// Set up elements needed
const elements = {
  textInput: document.getElementById('textInput'),
  characterCountOutput: document.getElementById("characterCountOutput")
};

// Function to increment count
function incrementCount() {
  let characterCount = elements.textInput.value.length;
  displayCount(characterCount);
}

// Function to update the count on screen
function displayCount(count) {
  elements.characterCountOutput.innerText = count;
}

// Function to add event listener
function initializeApp() {
  elements.textInput.addEventListener('input', incrementCount);
  displayCount(0);
}

// After script is read and loaded, initialize app
initializeApp();
```

## Learning Focus
- DOM manipulation
- Event handling
- Real-time form processing

## Next Steps
- Add styling improvements
- Implement character limit functionality
- Add word count in addition to character count

## Try It Out
1. Clone the repository
2. Open index.html in your browser
3. Start typing in the text field
4. Watch the character count update in real-time!

## About the 4-Week Challenge
This project is part of my personal challenge to code something new every day during my lunch breaks for 4 weeks, using only my iPad and GitHub Codespaces. Follow along to see my progress!

## License
MIT