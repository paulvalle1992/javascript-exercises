const removeFromArray = function(newArray, ...itemToRemove) {
    for (const multRemov of itemToRemove) {
    modifiedArray = newArray.indexOf(multRemov)
       if (modifiedArray !== -1) {
          newArray.splice(modifiedArray, itemToRemove.length)
          }   
          return newArray;
      }
  }
  
// Do not edit below this line
module.exports = removeFromArray;
