/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let sum = 0
    const arr = Array.from(chars).sort()
    
    words.forEach(word => {
        let temp = Array.from(word).sort()
        let j = 0;
        for(let i of arr) {
            if(i===temp[j])
                j++
        }
        if(j==temp.length)
            sum += temp.length
    })
    
    return sum
    
};