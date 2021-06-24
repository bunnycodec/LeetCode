class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        max = len(s)
        min = 0
        ans = []
        for i in s:
            if i == 'D':
                ans.append(max)
                max -= 1
            else:
                ans.append(min)
                min += 1

        ans.append(min)
        return ans
