const project1Button = document.getElementById("project1-btn")
const project2Button = document.getElementById("project2-btn")
const project3Button = document.getElementById("project3-btn")

project1Button.addEventListener ("click", handleBtnClick1 )
project2Button.addEventListener ("click", handleBtnClick2 )
project3Button.addEventListener ("click", handleBtnClick3 )

function handleBtnClick1(event){
    toggleButton1(event.target);
}

  function toggleButton1(element){
    const pressed = element.getAttribute("aria-pressed") === "true";
    element.setAttribute("aria-pressed", !pressed);
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = "Project 1 Details";
    if (pressed) {
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = "Project 1 Details are here";
    document.getElementById('project1').appendChild(newParagraph);
    }
    else{
        const blankParagraph = document.getElementById('project1');
        blankParagraph.innerHTML = "      "
    }
  }

  function handleBtnClick2(event){
    toggleButton2(event.target);
}

  function toggleButton2(element){
    const pressed = element.getAttribute("aria-pressed") === "true";
    element.setAttribute("aria-pressed", !pressed);
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = "Project 2 Details";
    if (pressed) {
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = "Project 2 Details are here";
    document.getElementById('project2').appendChild(newParagraph);
    }
    else{
        const blankParagraph = document.getElementById('project2');
        blankParagraph.innerHTML = "      "
    }
  }

  function handleBtnClick3(event){
    toggleButton3(event.target);
}

  function toggleButton3(element){
    const pressed = element.getAttribute("aria-pressed") === "true";
    element.setAttribute("aria-pressed", !pressed);
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = "Project 3 Details";
    if (pressed) {
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = "Project 3 Details are here";
    document.getElementById('project3').appendChild(newParagraph);
    }
    else{
        const blankParagraph = document.getElementById('project3');
        blankParagraph.innerHTML = "      "
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
  
