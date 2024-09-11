document.getElementById('top3Link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (navigating to the link)
    document.getElementById('popup').style.display = 'flex'; // Show the pop-up
    document.body.classList.add('blur'); // Add blur to the body
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Hide the pop-up
    document.body.classList.remove('blur'); // Remove blur from the body
});

// Close the pop-up when clicking outside the content area
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
        document.body.classList.remove('blur');
    }
};
