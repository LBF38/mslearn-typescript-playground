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