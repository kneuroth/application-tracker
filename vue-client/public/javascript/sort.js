//Sorts array of objects by fields
function sortBy(arr, ...fields){

    arr.sort((a, b) =>{
        for(let i = 0; i < fields.length; i++){
            if(a[fields[i]] > b[fields[i]]){
                return 1
            } else if(a[fields[i]] < b[fields[i]]){
                return -1
            }
        }
        return 0
    })

    console.log(arr)
}

module.exports = { sortBy }