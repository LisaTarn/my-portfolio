const toggleThemeButton = document.getElementById('toggleTheme');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


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
      }};
      
      const ctx = document.getElementById('canvas');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['HTML', 'CSS', 'JavaScript', 'Java'],
          datasets: [{
            label: 'Projects By Language',
            data: [12, 10, 11, 9],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      
      function validate(){
      const name = document.getElementById("name");
      const email = document.getElementById("email");
  
      if (name == " " || email == " "){
      name.setCustomValidity("Please enter your name");
      email.setCustomValidity("Please enter your email")
      }
      else {
          alert("Thank you for filling out all the fields.");
      }};      
      