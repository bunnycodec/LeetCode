/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    
    let arr = new Array(), val=-1, ans=0
    nums.push(0)
    
    // Array Splitting From 0's
    while(true) {
        if(nums.indexOf(0, val+1)===-1)
            break
        arr.push(nums.slice(val+1, nums.indexOf(0, val+1)))
        val = nums.indexOf(0, val+1)
    }
    
    for(x of arr) {
        if(checkLength(x)) {
            if(x.length>ans)
                ans = x.length
        }
        else {
            for(let i=0; i<x.length; i++) {
               if(x[i]<0) {
                    if(checkLength(x.slice(i+1)))
                       if((x.length-i-1)>ans)
                            ans = x.length-i-1
                    break
                } 
            }
                
            for(let i=x.length-1; i>=0; i--) {
                if(x[i]<0) {
                    if(checkLength(x.slice(0, i)))
                       if(i>ans)
                            ans = i
                    break
                }
            }
        }
    }
    
    return ans
    
    // Function for Product of all elements in the array
    function checkLength(arr) {
        if(arr.length===0)
            return false
        let total = 0
        total += arr.reduce((a, b) => a*b)
        
        if(total>0) return true
        return false
    }
};