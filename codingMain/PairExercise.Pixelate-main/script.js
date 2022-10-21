// reset
function resetFn() {
  const allTd = document.getElementsByTagName("td");
  Array.from(allTd).forEach((x) => {
    x.className = "lightgray";
  });
}
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetFn);

// make rows
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 30; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

const rowBtn = document.getElementById("add-row");
rowBtn.addEventListener("click", makeRow);

// change colors
table.addEventListener("click", color);
table.addEventListener("mousedown", mouseOver);
table.addEventListener("mouseup", removeMouse);

let curColor = "red";

function color(event) {
  let targ = event.target;
  console.log(targ);

  if (targ.tagName !== "TABLE") {
    if (targ.className.length === 0) {
      targ.className = curColor;
    }
    if (targ.className !== curColor) {
      targ.className = curColor;
    }
  }
}

function mouseOver(event) {
  color(event);
  table.addEventListener("mouseover", color);
}

function removeMouse() {
  table.removeEventListener("mouseover", color);
}

// menu selection
const selectMenu = document.getElementById("menu");

selectMenu.addEventListener("change", colorMenu);

function colorMenu(event) {
  curColor = event.target.value;
  console.log(curColor);
}

// table.addEventListener('mouseover', color2)

// function color2(event) {
//   let targ = event.target
//   console.log('c2')

//   if (targ.tagName !== 'TABLE') {
//     if (targ.className.length === 0 ) {

//       targ.className = curColor
//   }
//   if (targ.className !== curColor) {
//     targ.className = curColor
//   }

//   }

// }
