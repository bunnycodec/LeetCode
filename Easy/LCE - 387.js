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


// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.