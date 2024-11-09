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
