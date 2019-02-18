

function produceDrivingRange( blockRange ) {
  return function ( start, end ) {


    let travelDist = Math.abs( parseInt(end) - parseInt(start) );
    let difference = blockRange - travelDist;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}


function produceTipCalculator(tip) {


  return function (bill) {

        return bill * tip
  }

}


function createDriver() {

 let driverId = 0

 return class  {
    constructor(name) {
      this.name = name
      this.id  = ++driverId
    }

  }




}



//
// function createItem() {
//   let ItemId = 0;
//   // return the class
//   return class {
//     constructor(name, manufacturePrice) {
//       this.name = name;
//       this.manufacturePrice = manufacturePrice;
//       this.id = ++ItemId;
//     }
//
//     retailPrice(marketMultiplier) {
//       return marketMultiplier * this.manufacturePrice;
//     }
//   };
// }
