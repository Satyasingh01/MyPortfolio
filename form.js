// ✅ Initialize EmailJS
(function () {
    emailjs.init("g_PSAldar7Ocw4Ze1"); 
})();

const form = document.getElementById('contact-form');

// Helper functions
function showError(input, message) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function clearError(input) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

// Form Validation + EmailJS
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
    } else {
        clearError(name);
    }

    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(email);
    }

    // Message validation
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError(message, 'Please enter your message');
        isValid = false;
    } else {
        clearError(message);
    }

    // ✅ Send email if form is valid
    if (isValid) {
        emailjs.sendForm("service_mo8vxf7", "template_w5ssaco", form)
            .then(() => {
                alert("✅ Thanks for your message! I'll get back to you soon.");
                form.reset();
            }, (err) => {
                alert("❌ Failed to send. Error: " + JSON.stringify(err));
            });
    }
});
