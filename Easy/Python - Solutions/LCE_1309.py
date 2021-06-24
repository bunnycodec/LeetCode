class Solution:
    def freqAlphabets(self, s: str) -> str:
        curr = 0
        ans = ""

        while curr < len(s):
            if curr+2 < len(s) and s[curr+2] == "#":
                ans += chr(int(s[curr:curr+2]) + 96)
                curr += 3
            else:
                ans += chr(int(s[curr]) + 96)
                curr += 1

        return ans
