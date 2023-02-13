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

// Interserction Type
interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};

// Literal Type
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid

// Collection Type
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple Type
let person1: [string, number] = ['Marcia', 35]; // OK
// let person1: [string, number] = ['Marcia', 35, true]; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.
// let person1: [string, number] = [35, 'Marcia']; // Error: Type 'number' is not assignable to type 'string'.