document.addEventListener("DOMContentLoaded", function() {
    // Get the element with id "replaceTHIS"
    var replaceElement = document.getElementById("replaceTHIS");

    // Get the current URL ending
    var path = window.location.pathname;
    var parts = path.split('/');
    var ending = parts[parts.length - 1];

    // Check if the current ending is "Tests" or "TEST"
    if (ending === "TEST") {
        // Replace the content of the element with id "replaceTHIS" with "TESTTTTTTTTT!"
        replaceElement.textContent = "TESTTTTTTTTT!";
    }
});
