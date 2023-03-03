const removeFromArray = function(newArray, ...itemToRemove) {
    return newArray.filter(item => !itemToRemove.includes(item)) 
}


  
// Do not edit below this line
module.exports = removeFromArray;
