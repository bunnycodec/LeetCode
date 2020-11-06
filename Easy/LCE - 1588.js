/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    
    let ans = 0
    
    for(let i=1; i<=arr.length; i++) {
        for(let j=0; j<arr.length-i+1; j++) {
            let temp = arr.slice(j,j+i)
            if(temp.length%2==1){
                ans += sum(temp)
            }
        }
    }
    
    return ans
    
    function sum(arr) {
        let ans = arr.reduce((a,b) => a+b)
        return ans
    }  
};