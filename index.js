const produceDrivingRange = function(range) {
    return function (start, end) {
        const startNum = parseInt(start);
        const endNum = parseInt(end);
        const trip = Math.abs(startNum-endNum);

        if (range > trip ) {
            return `within range by ${trip}`;
        } else {
            return `${Math.abs(range-trip)} blocks out of range`;
        }
    }
}

function produceTipCalculator(percent) {
    return function (tip) {
        return tip * percent;
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}

const Driver = createDriver();