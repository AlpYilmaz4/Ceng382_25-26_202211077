document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Change the background to the new GIF
    const background = document.querySelector('.background');
    background.style.backgroundImage = "url('../Assets/LoginBackGround.gif')";

    // Optional: Add a delay or redirect after login
    setTimeout(() => {
        alert('Login successful!'); // Replace this with your desired action
    }, 1000);
});