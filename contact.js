// contact.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Here you can add your form submission logic (e.g., sending the form data to your email or server)
    
    // Reset the form
    document.getElementById('contactForm').reset();
});
