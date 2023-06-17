const gridContainer = document.querySelector("#grid-container");

const changeGridButton = document.querySelector("#btn-change-grid");

changeGridButton.addEventListener("click", () => {
    let squaresPerRow = prompt("Enter the number of squares that you want for rows", 16);
    let squaresPerColumn = prompt("Enter the number of squares that you want for columns", 16);
    // if the user didnt provide the data
    if (!squaresPerRow || !squaresPerColumn) {
        alert("Please provide the number of squares in each row and column");
        return;
    }

    // i didnt directly parse to integer the prompts, because if the value was not a numeric
    // value, parseInt() would return undefined and the previous condition would be meet
    // which would show an incorrect error
    squaresPerRow = parseInt(squaresPerRow);
    squaresPerColumn = parseInt(squaresPerColumn);
    // if the user provides non integer numeric values
    if (!Number.isInteger(squaresPerRow) || !Number.isInteger(squaresPerColumn)) {
        alert("Please provide integer values");
        return;
    }

    // if the user provides vaues higher than 100
    if (squaresPerRow > 100 || squaresPerColumn > 100) {
        alert("The maximum value of squares per row and column is 100");
        return;
    }
    createGridElements(squaresPerRow, squaresPerColumn);
});


function addHoverEffect(gridCell) {
    gridCell.addEventListener("mouseover", () => {
        gridCell.classList.add("hovered");
    });
}


function createGridElements(numberOfRows, numberOfColumns) {
    removeGridCells();
    for (let i = 0; i < numberOfRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < numberOfColumns; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            addHoverEffect(gridCell);
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}


function removeGridCells() {
    const gridRows = gridContainer.querySelectorAll(".grid-row");
    for (const row of gridRows) {
        gridContainer.removeChild(row);
    }
}

createGridElements(16, 16);