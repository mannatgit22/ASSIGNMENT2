document.getElementById('imageUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profilePic').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

function editField(id) {
    const field = document.getElementById(id);
    field.removeAttribute('readonly');
    field.focus();
}

function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const profilePic = document.getElementById('profilePic').src;

    const savedData = `
        <h3>Saved Data</h3>
        <img src="${profilePic}" alt="Profile Image" style="width: 100px; height: 100px; border-radius: 50%;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
    `;

    document.getElementById('savedData').innerHTML = savedData;

    document.getElementById('name').setAttribute('readonly', true);
    document.getElementById('email').setAttribute('readonly', true);
    document.getElementById('phone').setAttribute('readonly', true);
    document.getElementById('dob').setAttribute('readonly', true);
}

function resetForm() {
    document.getElementById('profileForm').reset();
    document.getElementById('profilePic').src = 'default-image.png';

    document.getElementById('name').setAttribute('readonly', true);
    document.getElementById('email').setAttribute('readonly', true);
    document.getElementById('phone').setAttribute('readonly', true);
    document.getElementById('dob').setAttribute('readonly', true);
}