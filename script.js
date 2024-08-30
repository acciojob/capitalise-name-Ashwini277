document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('fname');

    // Add an event listener to the input field for the blur event
    inputField.addEventListener('blur', function() {
        // Convert the input value to uppercase
        this.value = this.value.toUpperCase();
    });
});

