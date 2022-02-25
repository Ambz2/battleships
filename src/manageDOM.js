function addBoxes(grid) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const box = new Box(i, j);
      grid.appendChild(box.element);
    }
  }
}

function populateGrids() {
  const grids = document.querySelectorAll('.grid-container');
  grids.forEach((grid) => addBoxes(grid));
}



function updateShips(grid, array) {
  let allCoordinates = [];
  for (let i =0 ; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      allCoordinates.push(array[i][j])
    }
  }

  for (let k = 0; k < grid.children.length; k++) {
    for (let l = 0; l < allCoordinates.length; l++) {
      if (grid.children[k].dataset.coordinates === allCoordinates[l].toString()) {
        grid.children[k].classList.add('shipIsPresent')
      }
    }
  }
}

function handleDrag(playerGrid) {
  let dragged;
  document.addEventListener("drag", function(event) {

  });

  document.addEventListener('dragstart', function(event) {
    dragged = event.target
    event.target.style.opacity = 0.1;
  });

  document.addEventListener('dragend', function(event) {
    event.target.style.opacity = '';
  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);

  document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('box')) {
      let shipSize = dragged.dataset.size;
      let startCoordinates = JSON.parse('[' + event.target.dataset.coordinates + ']') 
      event.target.dataset.coordinates;
      event.target.classList.toggle('dragover');
      const succesfulPlacement = playerGrid.handleShipPlacement(shipSize, startCoordinates)
      if (succesfulPlacement) {
        dragged.remove()
      }
    } 
    return
  })

}


export { populateGrids, addBoxes, updateShips, handleDrag };
