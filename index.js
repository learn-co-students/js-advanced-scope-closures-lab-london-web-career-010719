// ✅ returns a function
// ✅ takes an argument of blockRange which is then used to calculate if something is within range ‣
// ✅ returns when something is out of range
function produceDrivingRange(range) {
  return function(start, end){
    const distance = Math.abs(parseInt(start) - parseInt(end))
    if (distance < range) {
      return `within range by ${range-distance}`
    } else {
      return `${distance-range} blocks out of range`
    }
  }
}
// ✅ returns a function
// ✅ configures the percentage tip returned
function produceTipCalculator(tipPercentage){
  return function(fare) {
    return fare*tipPercentage
  }
}
// ✅ returns a class that allows us to create a driver with a name attribute ‣
// ✅ increments the driverId each time a driver is created
function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
