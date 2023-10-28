# Predictions Web App

This simple web application, named "Predictions," provides users with random positive or negative predictions for their day. The app is built using HTML, CSS, and JavaScript and is designed to offer users a fun and lighthearted way to start their day.

## How It Works

The application consists of an HTML file, a CSS file for styling, and a JavaScript file to handle the functionality. Here's how it works:

1. HTML Structure: The HTML file sets up the basic structure of the web page. It includes a title, a link to an external CSS file for styling, and a container for the main content. Inside the container, you have three elements:

* <p id="number">?</p>: This paragraph initially displays a  question mark and is used to show a randomly generated number.
* <button>Дізнатись свою долю</button>: This button initiates the prediction process.
* <p id="predictions" class="positive"></p>: This paragraph is used to display the prediction text. It has an initial CSS class of "positive" for styling.

2. JavaScript Functionality: The JavaScript file handles the main functionality of the application. Here's a breakdown of how it works:

* Two arrays, arrPositive and arrNegative, contain positive and negative prediction messages, respectively.

* These arrays are combined into a single array, combinedArray, for easier random selection of predictions.

* An event listener is set up on the button element. When the button is clicked, it toggles between two states:

* State 1 (Initial): When the button text is "Дізнатись свою долю," clicking it starts a random number generator, simulating a spinning wheel.

* State 2 (Prediction Display): Once clicked again (when the button text is "Зупинити передбачення"), the spinning animation stops, and a random prediction is displayed in the #predictions paragraph. The CSS class for this paragraph is changed to either "positive" or "negative" based on whether the prediction is positive or negative, respectively.

3. Prediction Display: The random prediction is selected from the combinedArray, and the text is displayed in the #predictions paragraph. The class of the paragraph is updated to reflect the nature of the prediction.

4. Styling: The CSS file, referenced in the HTML, is responsible for the styling of the web page elements.

# How to Use

1. Open the HTML file in a web browser.
2. Click the "Дізнатись свою долю" button to start the prediction process.
3. The spinning animation will display a random number, and the button text will change to "Зупинити передбачення."
4. Click the button again to stop the animation and reveal a random prediction for your day. The prediction will be displayed in the #predictions paragraph, and its styling will reflect whether it's positive or negative.

This simple web app can be a fun and entertaining way to start your day with a random prediction!