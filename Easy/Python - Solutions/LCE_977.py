class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        ans = [i*i for i in nums]
        return sorted(ans)
