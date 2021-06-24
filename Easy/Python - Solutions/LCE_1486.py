class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        ans = start
        n -= 1
        while n > 0:
            start += 2
            ans ^= start
            n -= 1

        return ans
