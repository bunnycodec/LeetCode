class Solution:
    def maximum69Number(self, num: int) -> int:
        for i, val in enumerate(str(num)):
            if val == '6':
                return int(str(num)[0:i]+'9'+str(num)[i+1:])

        return num
