/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
    let newArr = [...arr], rank = []
    rank[0] = 1
    newArr.sort((a, b) => a-b)
    
    for(let i=1; i<newArr.length; i++) {
        if(newArr[i] === newArr[i-1])
            rank[i] = rank[i-1]
        else
            rank[i] = rank[i-1] + 1
    }
    
    for (let i=0; i<arr.length; i++) {
        arr[i] = rank[newArr.indexOf(arr[i])]
    }
    
    return arr
    
};