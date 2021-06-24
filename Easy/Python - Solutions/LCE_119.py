class Solution:
    def getRow(self, x: int) -> List[int]:
        ans = [1, 1]
        temp = [1, 1]
        if x == 0:
            return ans[1:]
        if x == 1:
            return ans

        x -= 1
        while x > 0:
            ans = []
            for i, val in enumerate(temp):
                if i != len(temp)-1:
                    ans.append(temp[i]+temp[i+1])

            x -= 1
            ans.insert(0, 1)
            ans.append(1)
            temp = ans

        return ans
