
function produceDrivingRange(blockRange){
  return function(block1,block2){
    let blockDiff = Math.abs(parseInt(block1) - parseInt(block2));
    let outOfRange = blockRange - blockDiff;
    if (outOfRange>=0) {
      return `within range by ${outOfRange}`;
    }
    else {
      return  `${-outOfRange} blocks out of range`;
    }
  };
}


function produceTipCalculator(tipP) {
  return function(price){
    return price*tipP;
  };
}

function createDriver(){
  let ItemID = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++ItemID;
    }
  };
}
