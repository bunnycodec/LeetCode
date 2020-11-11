/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let ans = new Map()
    
    for(let i=0; i<nums.length; i++) {
        if(ans.has(target - nums[i])) {
            return [ans.get(target - nums[i]), i]
        } else {
            ans.set(nums[i], i)
        }
    }
    
};