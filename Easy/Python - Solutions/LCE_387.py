class Solution:
    def firstUniqChar(self, s: str) -> int:
        for i, val in enumerate(s):
            if s.count(val) == 1:
                return i

        return -1
