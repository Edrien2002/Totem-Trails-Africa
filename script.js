function sendEmail() {
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        category: document.getElementById('category').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked ? 'Yes' : 'No',

    };
    emailjs
        .send('service_nq5xykg', 'template_baddloo', templateParams)
        .then(() => {
            console.log('Email sent successfully!');
        })

    .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
    });
}