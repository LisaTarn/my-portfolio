document.getElementById('contact').addEventListener('submit', () => {

  alert('Thank you for your submission.  I will reach out to you within 48 hours.')
})

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
      }
      

const data = {
  labels: ['HTML', 'CSS', 'JAVASCRIPT', 'JAVA'],
  datasets: [{
    label: "Projects I've worked on",
    data: [9, 2, 10, 10],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

      
      // render init block
      const myChart = new Chart(
        document.getElementById('canvas'),
        config
      );
      
      
   //   function updateChart(exercise){
   //     myChart.config.data.datasets[0].data.push(exercise.value);
   //     myChart.config.data.datasets[0].data.shift();
   //     myChart.update();
   //   };


          const name = document.getElementById("name");
          const email = document.getElementById("email");
      
      
          if (!(name >= "a" && name <= "z") &&
          !(name >="A" && name <= "Z")){
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
