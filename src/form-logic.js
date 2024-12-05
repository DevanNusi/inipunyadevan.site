document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const errorElements = document.querySelectorAll('[id$="Error"]');
    errorElements.forEach(el => el.textContent = '');

    
    let isValid = true;

    
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        document.getElementById('fullNameError').textContent = 'Full Name is required';
        document.getElementById('fullNameError').classList.remove('hidden');
        isValid = false;
    }


    const studentId = document.getElementById('studentId');
    if (studentId.value.trim() === '') {
        document.getElementById('studentIdError').textContent = 'Student ID is required';
        document.getElementById('studentIdError').classList.remove('hidden');
        isValid = false;
    }

    const email = document.getElementById(' email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    }

    const faculty = document.getElementById('faculty');
    if (faculty.value === '') {
        document.getElementById('facultyError').textContent = 'Please select a faculty';
        document.getElementById('facultyError').classList.remove('hidden');
        isValid = false;
    }

    const dob = document.getElementById('dob');
    if (dob.value === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required';
        document.getElementById('dobError').classList.remove('hidden');
        isValid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender';
        document.getElementById('genderError').classList.remove('hidden');
        isValid = false;
    }

    const address = document.getElementById('address');
    if (address.value.trim() === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        document.getElementById('addressError').classList.remove('hidden');
        isValid = false;
    }

    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone.value.trim()) || phone.value.trim().length < 10) {
        document.getElementById('phoneError').textContent = 'Phone Number must be numeric and at least 10 digits';
        document.getElementById('phoneError').classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
});

const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.add('border-red-500');
    });
    input.addEventListener('blur', function() {
        this.classList.remove('border-red-500');
    });
});