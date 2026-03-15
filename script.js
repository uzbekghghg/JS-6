let arr = [];

while (true) {
  let input = prompt("Введите команду");

  if (input === "stop") {
    break;
  }

  if (input.startsWith("add,")) {
    let text = input.slice(4); 
    console.log(text);
    arr.push(text);
  }

  if (input.startsWith("del,")) {
    let text = input.slice(4);
    let index = arr.indexOf(text);

    if (index !== -1) {
      arr.splice(index, 1);
    }
  }

  console.log(arr);

}


let asr = [11, 345, 678, 54, 90, 89, 98, 856, 93, 104, 115];

let even = [];
let num = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    } else {
        num.push(arr[i]);
    }
}

console.log(even);
console.log(num);