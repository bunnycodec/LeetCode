class Solution:
    def reverse(self, x: int) -> int:
        if x < 0:
            sign = -1
            x = x*-1
        else:
            sign = 1

        sums = 0
        while x > 0:
            temp = x % 10
            sums = sums*10 + temp
            x //= 10

        if not -2**31 <= sums <= 2**31-1:
            return 0

        if sign == -1:
            return sums*-1
        return sums
