// Array to store class data
const classData = [];

// Form Submission
document.getElementById('classForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const className = document.getElementById('className').value;
    const numPeople = document.getElementById('numPeople').value;
    const description = document.getElementById('description').value;

    // Add data to array
    classData.push({ className, numPeople, description });

    // Update table
    updateTable();

    // Clear form
    event.target.reset();
});

// Update Table Function
function updateTable() {
    const tbody = document.querySelector('#classTable tbody');
    tbody.innerHTML = ''; // Clear existing rows

    // Add new rows
    classData.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.className}</td>
            <td>${data.numPeople}</td>
            <td>${data.description}</td>
        `;

        // Click event to highlight row
        row.addEventListener('click', () => {
            console.log('Row clicked:', data);
            row.classList.toggle('highlight');
        });

        tbody.appendChild(row);
    });
}

// Focus Event for Form Fields
document.querySelectorAll('#classForm input, #classForm textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = '#f0f8ff'; // Light blue background
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = ''; // Reset background
    });
});

// Mouseover and Mouseout Events for Table Rows
document.getElementById('classTable').addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'TD') {
        event.target.parentElement.style.backgroundColor = '#f0f0f0'; // Light gray background
    }
});

document.getElementById('classTable').addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'TD') {
        event.target.parentElement.style.backgroundColor = ''; // Reset background
    }
});