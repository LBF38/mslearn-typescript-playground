function displayAlert(message: string | number) {
  alert("The message is " + message);
}

displayAlert("Hello World");
displayAlert(String(123));
displayAlert(123);

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
