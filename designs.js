// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    const makeTable = document.querySelector("#pixelCanvas");
    const gridHeight = document.querySelector("#inputHeight").value;
    const gridWidth = document.querySelector("#inputWidth").value;
  
    makeTable.innerHTML = "";
    
    // Input to allow user to select colors
    document.querySelector("#colorPicker").addEventListener("change", function(){
      this.setAttribute("value",document.querySelector("#colorPicker").value);
    });
  
    for(let i = 0; i < gridHeight; i++) {
      const cell = document.createElement("tr");
      for(let j=0; j<gridWidth; j++) {
        const td = document.createElement("td");
        cell.append(td);
      }
      makeTable.append(cell);
    }
    
    makeTable.addEventListener("click", function(e){
      e.target.style.background = document.querySelector("#colorPicker").value;
    });
  }
  
  // Calls makeGrid() from height and width values selected
  document.querySelector("#sizePicker input[type=submit]").addEventListener("click", function(e){
    e.preventDefault();
    makeGrid();
  });
  
  
