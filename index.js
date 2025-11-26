<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive DOM Manipulation</title>
</head>
<body>
    <h2>Interactive Div Example</h2>

    <label for="color-input">Enter a color:</label>
    <input type="text" id="color-input" placeholder="e.g., red, blue, #00ff00">

    <label for="text-input">Enter text:</label>
    <input type="text" id="text-input" placeholder="Type something...">

    <button id="change-bg-btn">Change Background</button>
    <button id="update-text-btn">Update Text</button>

    <div id="display-div" style="width: 300px; height: 150px; border: 1px solid black; margin-top: 20px; display: flex; align-items: center; justify-content: center;">
        Initial Text
    </div>

    <script src="script.js"></script>
</body>
</html>
