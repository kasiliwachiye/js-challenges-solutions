function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
  this.isRunning = true
}

Vehicle.prototype.turnOff = function () {
  this.isRunning = false
}

Vehicle.prototype.honk = function () {
  if (this.isRunning) {
    return 'beep!'
  }
  return 'turn on car'
}

let car1 = new Vehicle('audi', 'a4', 2022)
console.log(car1.make)
