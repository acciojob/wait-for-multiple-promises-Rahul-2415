

const output = document.getElementById("output");


const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.innerText = "Loading...";
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);


function createPromise() {
  
  const time = Math.floor(Math.random() * 3) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}


const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();


Promise.all([promise1, promise2, promise3]).then((times) => {
  
  output.innerHTML = "";

  let maxTime = 0;

  times.forEach((time, index) => {
    if (time > maxTime) {
      maxTime = time;
    }

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = `Promise ${index + 1}`;

    const timeCell = document.createElement("td");
    timeCell.innerText = time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);

    output.appendChild(row);
  });

  
  const totalRow = document.createElement("tr");

  const totalName = document.createElement("td");
  totalName.innerText = "Total";

  const totalTime = document.createElement("td");
  totalTime.innerText = maxTime.toFixed(3);

  totalRow.appendChild(totalName);
  totalRow.appendChild(totalTime);

  output.appendChild(totalRow);
});
