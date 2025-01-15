// Function to handle project applications
function applyForProject(projectName) {
    alert('You have applied for the ' + projectName + ' project!');
  }
  
  // Function to handle contact form submission
  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Displaying a response message
    document.getElementById('formResponse').innerText = 
      'Thank you, ' + name + '! Your message has been sent.';
    
    // Resetting the form
    document.getElementById('contactForm').reset();
    return false; // Preventing the default form submission
  }
  