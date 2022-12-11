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

console.log(randomValue2.name);  // Error: Object is of type unknown
randomValue2();                  // Error: Object is of type unknown
randomValue2.toUpperCase();      // Error: Object is of type unknown