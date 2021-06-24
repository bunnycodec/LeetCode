class Solution:
    def sumZero(self, n: int) -> List[int]:
        if n == 1:
            return [0]

        ans = []
        if n % 2 == 0:
            count = n//2
            for _ in range(n+1):
                ans.append(count)
                count -= 1
            ans.remove(0)
        else:
            count = n//2
            for _ in range(n):
                ans.append(count)
                count -= 1

        return ans
