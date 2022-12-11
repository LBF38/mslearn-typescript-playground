// Enum Type
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

// Any Type
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK
// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Unknown Type
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';

// console.log(randomValue2.name);  // Error: Object is of type unknown
// randomValue2();                  // Error: Object is of type unknown
// randomValue2.toUpperCase();      // Error: Object is of type unknown

// Type Assertions
let randomValue3: unknown = 10;

randomValue3 = true;
randomValue3 = 'Mateo';

if (typeof randomValue3 === "string") {
    console.log((randomValue3 as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

// Union Type
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
// multiType = "twenty";   //* Invalid

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error