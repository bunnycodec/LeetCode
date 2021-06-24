class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        ans = []
        if len(arr) == 0:
            return ans

        if max(arr) == min(arr):
            for _ in arr:
                ans.append(1)

        else:
            k = 1
            myDict = {}
            sort = sorted(arr)
            for i in range(len(sort)):
                if sort[i] not in myDict:
                    myDict[sort[i]] = k
                    k += 1

            for i in arr:
                ans.append(myDict[i])

        return ans
