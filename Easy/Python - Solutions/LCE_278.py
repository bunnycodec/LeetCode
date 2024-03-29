class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
                
                
        left, right = 1, n
        if isBadVersion(left):
            return left
        while left < right:
            middle = (left + right) // 2
            if isBadVersion(middle):
                right = middle
            else:
                left = middle + 1
        return left