document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form submitted!");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.getElementById('sign-in-button');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    signInButton.addEventListener('click', function () {
        popup.classList.add('show');
    });

    closePopup.addEventListener('click', function () {
        popup.classList.remove('show');
    });

    // Optional: Close the popup when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});