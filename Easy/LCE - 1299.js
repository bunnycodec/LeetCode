/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    let ans = []
    let k = 1
    
    arr.forEach(n => {
        let temp = arr.slice(k)
        if(k<arr.length)
            ans.push(Math.max(...temp))
        else
            ans.push(-1)
        k++
    })
    
    return ans
    
};
