(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5],{57005:n=>{n.exports='## [665. 非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/)\n\n给你一个长度为`n` 的整数数组，请你判断在 最多 改变 `1` 个元素的情况下，该数组能否变成一个非递减数列。\n\n我们是这样定义一个非递减数列的： 对于数组中所有的` i (0 <= i <= n-2)`，总满足` nums[i] <= nums[i + 1]`。\n\n**示例 1：**\n\n```\n输入: nums = [4,2,3]\n输出: true\n解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。\n```\n\n**示例 2：**\n\n```\n输入: nums = [4,2,1]\n输出: false\n解释: 你不能在只改变一个元素的情况下将其变为非递减数列。\n```\n\n#### 解题思路\n\n假设存在`a,b,c`三个元素，然后`a<=b`满足，那么对于`c`而言总共有下述几种情况：\n\n- `a<=b<=c`：那就已经满足条件\n- `a<=b>c`：① 如果`c>=a`，那显然令`b=c`留个后续的空间更大 ② 如果`c<a`，那只能`c=b`了\n\n**采取的贪心策略：每次使得当前的递增是"最小递增"**\n\nC++实现：\n\n```cpp\nclass Solution {\npublic:\n    bool checkPossibility(vector<int> &nums) {\n        if (nums.size() <= 2)\n            return true;\n        int cnt = 0;\n        for (int i = 1; i < nums.size(); ++i) {\n            if (nums[i] < nums[i - 1]) {\n                if (cnt == 1)\n                    return false;\n                if (i - 2 < 0) {\n                    nums[i - 1] = nums[i] = min(nums[i], nums[i - 1]);\n                } else if (nums[i] >= nums[i - 2])\n                    nums[i - 1] = nums[i];\n                else\n                    nums[i] = nums[i - 1];\n                cnt += 1;\n            }\n        }\n        return true;\n    }\n};\n```\n\nPython实现：\n\n```python\n\n```\n\n'}}]);