const sumAll = function(stInt, ndInt) {
    let sum = 0
    if (Number.isInteger(stInt) === false || Number.isInteger(ndInt) === false || stInt < 0 || ndInt < 0) {
      return "ERROR";
    } else if (stInt <= ndInt) {
      for (let i = stInt; i <= ndInt; i++) {
         sum += i;
      } return sum;
    } else if (stInt >= ndInt) {
      for (let i = ndInt; i <= stInt; i++) {
        sum += i;
      } return sum;
    } 
  }

// Do not edit below this line
module.exports = sumAll;


