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
}


// Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.

// A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

// Return the maximum length of a subarray with positive product.

 

// Example 1:

// Input: nums = [1,-2,-3,4]
// Output: 4
// Explanation: The array nums already has a positive product of 24.
// Example 2:

// Input: nums = [0,1,-2,-3,-4]
// Output: 3
// Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
// Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
// Example 3:

// Input: nums = [-1,-2,-3,0,1]
// Output: 2
// Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].
// Example 4:

// Input: nums = [-1,2]
// Output: 1
// Example 5:

// Input: nums = [1,2,3,5,-6,4,0,10]
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9