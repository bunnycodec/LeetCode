class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        n1 = 1
        n2 = n-1

        while n1 != n:
            if n1+n2 == n and "0" not in str(n1) and "0" not in str(n2):
                return [n1, n2]
            else:
                n1 += 1
                n2 -= 1

        return []
