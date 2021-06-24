class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        ans = 0
        k = 1

        while k <= len(arr):
            for i in range(0, len(arr)):
                if i+k <= len(arr):
                    ans += sum(i for i in arr[i:i+k])

            k += 2

        return ans
