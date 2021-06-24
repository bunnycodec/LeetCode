class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        prod = 1
        add = 0
        for i in str(n):
            prod *= int(i)
        add = sum(int(i) for i in str(n))
        return prod-add
