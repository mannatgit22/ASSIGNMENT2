function enableEditing() {
    const elements = document.querySelectorAll('.editable');
    elements.forEach(element => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = element.textContent;
        element.parentNode.replaceChild(input, element);
    });
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'inline-block';
    document.getElementById('cancelButton').style.display = 'inline-block';
}

// Function to save the edited details
function saveDetails() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.classList.add('editable');
        span.textContent = input.value;
        input.parentNode.replaceChild(span, input);
    });
    document.getElementById('editButton').style.display = 'inline-block';
    document.getElementById('saveButton').style.display = 'none';
    document.getElementById('cancelButton').style.display = 'none';
}

// Function to cancel editing and revert to original details
function cancelEditing() {
    location.reload(); // Reload the page to revert to original details
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('editButton').addEventListener('click', enableEditing);
    document.getElementById('saveButton').addEventListener('click', saveDetails);
    document.getElementById('cancelButton').addEventListener('click', cancelEditing);
});