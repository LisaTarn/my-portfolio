const project1Button = document.getElementById("project1-btn")
const project2Button = document.getElementById("project2-btn")
const project3Button = document.getElementById("project3-btn")

project1Button.addEventListener ("click", toggleelement1() );
project2Button.addEventListener ("click", toggleelement2() );
project3Button.addEventListener ("click", toggleelement3() );


function toggleelement1(){
  const paragraph= document.getElementById('project1');
  const currentVisibility = window.getComputedStyle(paragraph).visibility;

  if (currentVisibility === 'hidden'){
    paragraph.style.visibility = 'visible';
  }else{
    paragraph.style.visibility = 'hidden';
  }
  }

  function toggleelement2(){
    const paragraph= document.getElementById('project2');
    const currentVisibility = window.getComputedStyle(paragraph).visibility;
  
    if (currentVisibility === 'hidden'){
      paragraph.style.visibility = 'visible';
    }else{
      paragraph.style.visibility = 'hidden';
    }
    }

    function toggleelement3(){
      const paragraph= document.getElementById('project3');
      const currentVisibility = window.getComputedStyle(paragraph).visibility;
    
      if (currentVisibility === 'hidden'){
        paragraph.style.visibility = 'visible';
      }else{
        paragraph.style.visibility = 'hidden';
      }
      }
  

  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error");
  const fullname = document.getElementById("fullname");
  const nameError = document.querySelector("#fullname + span.error")
  const message = document.getElementById("message");
  const messageError = document.querySelector("#message + span.error");

  fullname.addEventListener("input", () => {
    if (fullname.validity.valid) {
      nameError.textContent ="";
      nameError.className="error";
    } else{
      showErrorName();
    }
  })

  email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailError.textContent = ""; // Remove the message content
      emailError.className = "error"; // Removes the `active` class
    } else {
      // If there is still an error, show the correct error
      showErrorEmail();
    }
  });

  message.AddEventListener("input", () => {
    if (message.validity.valid) {
      messageError.textContent ="";
      messageError.className="error";
    } else{
      showErrorMessage();
    }
  })
  
  form.addEventListener("submit", (event) => {
    // if the email field is invalid
    if (!email.validity.valid) {
      // display an appropriate error message
      showErrorEmail();
      // prevent form submission
      event.preventDefault();
    } 
    else if (!fullname.validity.valid) {
      showErrorName();
      event.preventDefault();
    }
    else if (!message.validity.valid){
      showErrorMessage ()
      event.preventDefault();
    }
  });
  
  function showErrorName() {
    if (fullname.validity.valueMissing) {
      // If empty
      nameError.textContent = "You need to enter a name.";
    } else if (fullname.validity.typeMismatch) {
      // If it's not a name
      nameError.textContent = "Entered value needs to be a name.";
    }
    // Add the `active` class
    nameError.className = "error active";
  }
  
  function showErrorEmail() {
    if (email.validity.valueMissing) {
      // If empty
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      // If it's not an email address,
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      // If the value is too short,
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    // Add the `active` class
    emailError.className = "error active";
  }
  
  function showErrorMessage() {
    if (message.validity.valueMissing) {
      // If empty
      messageError.textContent = "You need to enter a a message";
    } else if (message.validity.typeMismatch) {
      // If it's not a message,
      messageError.textContent = "Entered value needs to be a message.";
    } 
    // Add the `active` class
    messageError.className = "error active";
  }
  

