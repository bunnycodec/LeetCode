/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    for(let i=0; i<s.length; i++) {
        if(s.indexOf(s[i])==i) {
            if(s.indexOf(s[i], i+1) === -1)
                return i
        }
    }
    
    return -1
}