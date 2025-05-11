const container = document.querySelector(".div_class");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = ""; 
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
     const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
     square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

    container.appendChild(square);
  }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
  let input = prompt("Enter grid size (max 100):");
  let size = parseInt(input);

  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});