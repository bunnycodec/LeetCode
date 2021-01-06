/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    
    let i=0, d=S.length
    let ans = []
    
    for(x of S) {
        if(x==='I') {
            ans.push(i)
            i++
        }
        if(x==='D') {
            ans.push(d)
            d--
        }
    }
    
    ans.push(i)
    return ans
};