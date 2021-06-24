class Solution:
    def isPowerOfTwo(self, n: int) -> bool:

        # Solution 1
        return n > 0 and log2(n) == int(log2(n))

        # Solution 2
        x = 0
        while 2**x <= n:
            if int(2**x) == n:
                return True
            x += 1
        return False
