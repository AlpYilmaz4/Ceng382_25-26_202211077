// Array to store class data
const classData = [];

// Form submission
document.getElementById('classForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const className = document.getElementById('className').value;
    const numPeople = document.getElementById('numPeople').value;
    const description = document.getElementById('description').value;

    // Add data to array
    classData.push({ className, numPeople, description });

    // Update the table
    updateTable();

    // Clear the form
    event.target.reset();
});

// Function to update the table
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

        // Click Event: Highlight row
        row.addEventListener('click', () => {
            console.log('Row clicked:', data);
            row.classList.toggle('highlight');
        });

        // Double-Click Event: Delete row
        row.addEventListener('dblclick', () => {
            classData.splice(index, 1); // Remove the row from the array
            updateTable(); // Update the table
        });

        // Mouseover Event: Highlight row on hover
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#f0f0f0'; // Light gray background
        });

        // Mouseout Event: Reset row background color
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = ''; // Reset background
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