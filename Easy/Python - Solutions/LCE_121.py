class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minp = prices[0]
        ans = 0
        for i in prices:
            minp = min(minp, i)
            temp = i-minp
            if temp > ans:
                ans = temp

        return ans
