// function displayAlert(message: string | number) {
//   alert("The message is " + message);
// }

// displayAlert("Hello World");
// displayAlert(String(123));
// displayAlert(123);

function sum(input: number[]): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}

sum([1, 2, 3, 4, 5]);
// sum([1, 2, 3, 4, 5, "6"]); // Error : Type 'string' not assignable to type 'number'

let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });

// Exercise - Playground
let addThreeNumbers = (x: number, y: number, z: number = 100): number =>
  x + y + (z ?? 0);
addThreeNumbers(10, 20);

// type calculator = (x: number, y: number) => number;
interface calculator {
  (x: number, y: number): number;
}
let addNumbers2: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers2(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: "add" | "subtract"): calculator => {
  if (operation === "add") {
    return addNumbers2;
  } else {
    return subtractNumbers;
  }
};

console.log(doCalculation("add")(1, 2));
