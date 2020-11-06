/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let ans = 0
    nums.forEach(num => {
        let count = 0
        while(num!=0) {
            num /= 10
            count++
        }
        if(count%2==0)
            ans++
    })
    return ans
};
