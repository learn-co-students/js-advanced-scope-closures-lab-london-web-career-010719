function produceDrivingRange(blockRange) {
    return function(start, destination) {
        start = parseInt(start)
        destination = parseInt(destination)
        const distance = destination - start
        if (distance > blockRange) {
            return `${distance - blockRange} blocks out of range`
        } else {
            return `within range by ${blockRange - distance}`
        }
    }
}

function produceTipCalculator(percentTip){
    return function(price) {
        return price * percentTip
    }
}

function createDriver() {
    let driverId = 0
    class Driver {
        constructor(name) {
            this.name = name
            this. id = driverId
            increment_dId()
        }
    }
    function increment_dId() {
        driverId++
    }
    return Driver
}

