/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    let ans = Array.from(num.toString())
    for(let i=0; i<ans.length; i++) {
        if(ans[i] === '6') {
            ans[i] = '9'
            return Math.floor(ans.reduce((a, b) => a+b))
        }
    }
    
    return num
    
};