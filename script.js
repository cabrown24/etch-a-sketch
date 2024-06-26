const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeButton");

function drawGrid(size = 16) {
    //16 rows with 16 square divs in each row.
    for (let row = 0; row < size; row++) {

        const row = document.createElement("div");
        row.classList.add("row")
        container.appendChild(row);

        for (let col = 0; col < size; col++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            row.appendChild(squareDiv);
        }
    }

}

drawGrid();

let r = 61;
let g = 22;
let b = 36;

container.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.classList.contains("square")) {
        //remember: prefix operator returns the updated value
        //so it can be used right away.
        target.style.backgroundColor = `rgb(${++r},${--g},${++b})`;
        
        //random color
        //target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
});

sizeButton.addEventListener("click", () => {
    
    //promt returns null if the user clicks cancel.
    let size = prompt("enter the number of squares per side that you would like: (must be less than or equal to 100) ");
    if( (size !== null) && (size <= 100) ) {
        //remove current grid
        container.innerHTML = '';

        drawGrid(size);
        //reset drawing color
        r = 61;
        g = 22;
        b = 36;
    }

    else if( size === "quit") {
        container.innerHTML = '';
        const byeMsg = document.createElement("h1");
        byeMsg.textContent = "idk why you typed that when u can just close the tab but byee!!";
        container.appendChild(byeMsg);
    }
});