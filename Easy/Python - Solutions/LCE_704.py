class Solution:
    def search(self, nums: List[int], target: int) -> int:
        r = len(nums)
        l = 0

        while l < r:
            m = l+(r-l)//2
            if nums[m] == target:
                return m
            if nums[m] < target:
                l = m + 1
            else:
                r = m

        return -1
