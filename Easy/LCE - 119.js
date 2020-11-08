/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    if(rowIndex==0) {
        return [1]
    } else if(rowIndex==1) {
        return [1,1]
    } else {
        let ans = [1,1], temp
        rowIndex--
        while(rowIndex--) {
            temp = ans
            ans = []
            for(let i=0; i<temp.length-1; i++) {
                ans[i] = temp[i] + temp[i+1] 
            }
            ans = [1, ...ans, 1]
        }
        return ans
    }
    
};