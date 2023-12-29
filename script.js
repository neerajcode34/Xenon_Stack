
// script.js

function login() {
    const email = document.getElementById('lemail').value;
  const password = document.getElementById('lpassword').value;

  // Perform login logic (this is just a basic example)
  if (email === 'user@example.com' && password === 'password') {
    console.log('Login successful');
    
    // Redirect to the home page
    window.location.href = 'index.html';

  } else {
    console.log('Login failed');
    // Handle login failure, show error message, etc.
  }
  }
  
  function signup() {
    console.log("Signup successful. Redirecting to login.html...");

    // Redirect to login.html
    window.location.href = '/login.html';
  }
  
  function exploreProducts() {
    window.location.href = 'products.html';
  }
  
  // Function to toggle password visibility
  document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('lpassword');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  });
  
  // Add more functions as needed for your specific requirements
  
  // Function to handle contact form submission
  function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Perform any additional validation or logic here
  
    // For this example, just log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // You can make an AJAX request to your backend here to save the contact form data
    // Example using fetch:
    // fetch('http://localhost:3000/contactus', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Contact form submitted successfully:', data);
    //   alert('Message sent successfully');
    // })
    // .catch(error => {
    //   console.error('Error submitting contact form:', error);
    //   alert('Failed to send message: Please try again.');
    // });
  }
  