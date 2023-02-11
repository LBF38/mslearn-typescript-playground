class Car {
  // Properties
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors: number = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  // Accessors
  get make(): string {
    return this._make;
  }

  set make(make: string) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }

  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  private worker(): string {
    return this._make;
  }
}

let myCar1 = new Car("Cool Car Company", "blue", 2); // Instantiates the Car object with all parameters
console.log(myCar1.color); // Calls the getter for the color property

// let myCar2 = new Car("Galaxy Motors", "red", 3);
// myCar2.doors = 4; // Calls the setter for the doors property
// console.log(myCar2.doors); // Calls the getter for the doors property

let myCar3 = new Car("Galaxy Motors", "gray");
console.log(myCar3.doors); // returns 4, the default value

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn("right"));
