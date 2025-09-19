(function(){
  emailjs.init("g_PSAldar7Ocw4Ze1"); 
})();

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('status');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  statusEl.textContent = "Sending...";

  emailjs.sendForm('service_mo8vxf7', 'template_w5ssaco', this)
    .then(() => {
        statusEl.textContent = "✅ Message sent successfully!";
        statusEl.style.color = "#4fc3f7";
        form.reset();
    }, (err) => {
        console.error('EmailJS Error:', err);
        statusEl.textContent = "❌ Failed to send. Please try again.";
        statusEl.style.color = "#ff5252";
    });
});
