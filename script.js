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
  
      const submitButton = document.getElementById("submit");
      submitButton.addEventListener ("click", validate());
      
      function validate(){
          const name = document.getElementById("name");
          const email = document.getElementById("email");
      
      
          if (name.validity.typeMismatch) {
          name.setCustomValidity("Please enter your name");
          }
          else {
              name.setCustomValidity("");
          }
        
          if (email.validity.typeMismatch){
              email.setCustomValidity("Please enter your email address");
      
          }
          else{
              email.setCustomValidity("");
          }
        };