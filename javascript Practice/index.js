let arr = ["","W","E","L","C","O","M", "E"," ","T","O"," ","K","A","R","A","C","H","I"
];

let count = 0;
let num = 0;
let arrLength = 0;
let div = document.getElementById("div");
function welcomeFun() {
  count++;
  num = num + 1;
  arrLength = arr.length;

  if (num < arrLength) {
    div.innerHTML += arr[num];
  } else {
    num = 0;
    console.log("");
    div.innerHTML = "";
  }
  if (count === arrLength - 1) {
    clearInterval(interval);
  }
}
let interval = setInterval(welcomeFun, 250);
setTimeout(interval,5000);