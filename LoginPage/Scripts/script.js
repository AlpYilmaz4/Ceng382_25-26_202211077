// Live Clock
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();

    // Format time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately

// Login Functionality
document.getElementById('loginImage').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        // Change the background to LoginBackGround.gif
        const background = document.getElementById('login-background');
        background.style.backgroundImage = "url('Assets/LoginBackGround.gif')";

        // Redirect to table.html after a short delay
        setTimeout(() => {
            window.location.href = "table.html";
        }, 2000); // 2-second delay for the transition
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Hide/Show Login Container on 'H' Key Press
document.addEventListener('keydown', function(event) {
    if (event.key === 'h' || event.key === 'H') {
        const loginContainer = document.querySelector('.login-container');
        loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
    }
});