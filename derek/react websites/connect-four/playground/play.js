document.getElementById("board").style.backgroundColor = "red";
document.getElementById("cell03").style.backgroundColor = "lightblue";
document.getElementById("cell14").style.backgroundColor = "yellow";
const columnElements = document.getElementsByClassName("column"); //HTMLCollection
const rowElements = document.getElementsByClassName("row"); //HTMLCollection
Array.prototype.forEach.call(
    columnElements,
    function(columnElement) {
        columnElement.style.backgroundColor = "orange";
        let node = document.createTextNode ('O');
        columnElement.appendChild(node);
        console.log(columnElement.id); //console.log(columnElement.getAttribute('id'));
    }
);
Array.prototype.forEach.call(
    rowElements,
    function(rowElement) {
        rowElement.style.backgroundColor = "blue";
        let node = document.createTextNode ('X');
        rowElement.appendChild(node);
        console.log(rowElement.id); //console.log(columnElement.getAttribute('id'));
    }
);

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Wins vs Losses',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

const ctx = 'myChart';
const myChart = new Chart(
    ctx,
    config
);

// alert('you lost');