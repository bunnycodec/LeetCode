class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        ans = 0
        for val in words:
            flag = 1
            for i in set(val):
                if chars.count(i) < val.count(i):
                    flag = 0
                    break
            if flag == 1:
                ans += len(val)

        return ans
