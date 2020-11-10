/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    let ans = '', num = 0
    let alpha = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    for(let i=0; i<s.length; i++) {
        if(s[i+2] === '#') {
            num = Math.floor(s[i]+s[i+1])
            i+=2
        } else {
            num = Math.floor(s[i])
        }
        
        ans += alpha[num]
    }
    
    return ans
};