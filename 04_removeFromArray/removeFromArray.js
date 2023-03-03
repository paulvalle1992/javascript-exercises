const removeFromArray = function(newArray, itemToRemove) {
    modifiedArray = newArray.indexOf(itemToRemove) 
    if (modifiedArray !== -1) {
        newArray.splice(modifiedArray, 1)
        }   
        return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
