const root = document.getElementById("root");

const NUMBER = 2;
let sqrt = Math.sqrt(NUMBER);
let cube = Math.pow(sqrt, 3);
let divideBy2 = 0;

document.getElementById("sqrt").innerText = sqrt;
document.getElementById("cube").innerText = cube;

const tableContent = document.getElementById("root-table-content");

for (let i = 1; i < 100; i++) {
  divideBy2 = cube / 2;
  cube = Math.pow(divideBy2, 3);
  const spanTime = document.createElement("span");
  spanTime.innerText = i;
  const spanNumber = document.createElement("span");
  spanNumber.innerText = divideBy2;
  const spanCube = document.createElement("span");
  spanCube.innerText = cube;
  const div = document.createElement("div");
  div.appendChild(spanTime);
  div.appendChild(spanNumber);
  div.appendChild(spanCube);
  tableContent.appendChild(div);
}
