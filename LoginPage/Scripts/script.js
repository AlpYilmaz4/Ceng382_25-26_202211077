// Array to store login credentials
const loginCredentials = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store credentials in the array
    loginCredentials.push({ username, password });

    // Print the array to the console
    console.log('Stored Login Credentials:', loginCredentials);

    // Change the background to the new GIF
    const background = document.querySelector('.background');
    background.style.backgroundImage = "url('Assets/LoginBackGround.gif')";

    // Optional: Add a delay or redirect after login
    setTimeout(() => {
        alert('Login successful!'); // Replace this with your desired action
    }, 1000);
});

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

// Function to toggle login UI visibility
function toggleLoginUI() {
    const loginContainer = document.getElementById('loginContainer');
    if (loginContainer.style.display === 'none') {
        // Show login UI
        loginContainer.style.display = 'block';
    } else {
        // Hide login UI
        loginContainer.style.display = 'none';
    }
}

// Add event listener for the 'H' key
document.addEventListener('keydown', function(event) {
    if (event.key === 'h' || event.key === 'H') {
        toggleLoginUI();
    }
});