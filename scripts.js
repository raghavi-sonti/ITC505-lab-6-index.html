// JavaScript function to calculate the square of a given number
function calculateSquare() {
    var number = document.getElementById('numberInput').value;
    
    // Check if the user entered a value
    if (number === "") {
        alert("Please enter a number.");
    } else {
        var square = number * number;
        document.getElementById('result').textContent = "The square of " + number + " is: " + square;
    }
}

// Display last modified date dynamically in the footer
var lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
