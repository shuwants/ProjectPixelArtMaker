// Select Canvas
const pixelCanvas = document.querySelector('#pixelCanvas');

// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const sizePicker = document.querySelector('#sizePicker');


// Your code goes here!

// makeGrid
function makeGrid() {
let gridHeight = document.querySelector('#inputHeight').value;
let gridWidth = document.querySelector('#inputWidth').value;
while(pixelCanvas.firstChild){
  pixelCanvas.removeChild(pixelCanvas.firstChild);
}

for (var row = 0; row < gridHeight; row++){
  let gridRow = document.createElement('tr');
  pixelCanvas.appendChild(gridRow);
  for (var col = 0; col < gridWidth; col++){
    let gridCol = document.createElement('td');
    gridRow.appendChild(gridCol);
    gridCol.addEventListener('mousedown', function(){
      const color = document.querySelector('#colorPicker').value;
    })
  }
}
}

sizePicker.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});

// coloring pixelCanvas
let down = false;

pixelCanvas.addEventListener('mousedown', function(event){
  down = true;
  pixelCanvas.addEventListener('mouseup', function(){
    down = false;
  });
pixelCanvas.addEventListener('mouseleave', function(){
  down = false;
});

pixelCanvas.addEventListener('mouseover', function(event){
  const color = document.querySelector('#colorPicker').value;
  if (down){
    if(event.tagName === 'TD'){
      event.target.style.backgroundColor = color;
    }
  }
});
});

// double click to clear color
pixelCanvas.addEventListener('dblclick', event =>{
  event.target.style.backgroundColor = null;
})


// filling colors
pixelCanvas.addEventListener('click', function(){
  pixelCanvas.addEventListener('mousedown', function(event){
    down = true;
    pixelCanvas.addEventListener('mouseup', function(){
      down = false;
    });
    pixelCanvas.addEventListener('mouseleave', function(){
      down = false;
    });
    pixelCanvas.addEventListener('mouseover', function(event){
      if (down){
        if(event.target.tagName==='TD'){
          event.target.style.backgroundColor = null;
        }
      }
    });
    pixelCanvas.addEventListener('mousedown', function(event){
      event.target.style.backgroundColor = null;
    });
});
});

pixelCanvas.addEventListener('click', function(){
  pixelCanvas.addEventListener('mousedown', function(event){
    down = true;
    pixelCanvas.addEventListener('mouseup', function(){
      down = false;
    });
    pixelCanvas.addEventListener('mouseleave', function(){
      down = false;
    });
    pixelCanvas.addEventListener('mouseover', function(event){
      const color = document.querySelector('#colorPicker').value;
      if (down){
        if (event.target.tagName === 'TD'){
          event.target.style.backgroundColor = color;
  }
}
});
});

pixelCanvas.addEventListener('mousedown', function(event){
  if (event.target.tagName !=='TD') return;
  const color = document.querySelector('#colorPicker').value;
  event.target.style.backgroundColor = color;
});
});
