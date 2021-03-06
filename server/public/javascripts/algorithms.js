
/**
 * 
 * @param {*} arr array of unsorted integers greater and equal to zero
 * @returns lowest positive integer that is not in the array
 *  
 */
function getLowestAvailableInt(arr){
    
    let lowest = 0;
    let map = {};
    for(let i = 0; i < arr.length; i++){
        map[arr[i]] = true;
    }

    while(map[lowest]){
        lowest++;
    }

    return lowest

}

module.exports = {getLowestAvailableInt}