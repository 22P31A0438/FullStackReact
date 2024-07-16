let gridSize;
let currentRow = 0;
let currentCol = 0;

function createGrid() {
    gridSize = parseInt(prompt("Enter the grid size (n for n x n grid):"));
    if (isNaN(gridSize) || gridSize <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';  // Clear any existing grid
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            if (i === 0 && j === 0) {
                const img = document.createElement('img');
                img.src = 'path_to_your_image.png'; // Replace with the path to your image
                img.id = 'moving-image';
                cell.appendChild(img);
            } 
            gridContainer.appendChild(cell);
        }
    }

    currentRow = 0;
    currentCol = 0;
}

function moveImage(d) {
    const gridContainer = document.getElementById('grid-container');
    const cells = gridContainer.getElementsByClassName('grid-cell');
    const img = document.getElementById('moving-image');

    cells[currentRow * gridSize + currentCol].removeChild(img);

    switch (d) {
        case 'left':
            if (currentCol > 0) currentCol--;
            break;
        case 'right':
            if (currentCol < gridSize - 1) currentCol++;
            break;
        case 'up':
            if (currentRow > 0) currentRow--;
            break;
        case 'down':
            if (currentRow < gridSize - 1) currentRow++;
            break;
    }

    cells[currentRow * gridSize + currentCol].appendChild(img);
}
