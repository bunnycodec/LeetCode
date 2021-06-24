class Solution:
    def checkStraightLine(self, arr):
        x1, y1 = arr[0]
        x2, y2 = arr[1]

        for x, y in arr[2:]:
            if (y2-y1)*(x-x1) != (x2-x1)*(y-y1):
                return False
        return True
