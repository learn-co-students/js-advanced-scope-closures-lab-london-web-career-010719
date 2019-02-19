function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

    start = startBlock.slice(0, startBlock.length - 2)
    end = endBlock.slice(0, endBlock.length - 2)

    journeyRange = Math.abs(end - start)

    if (blockRange >= journeyRange) {
      return `within range by ${Math.abs(blockRange - journeyRange)}`
    }
    else {
      return `${Math.abs(blockRange - journeyRange)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
    return function(fare) {
      return fare * tip
    }
}

function createDriver(name) {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
