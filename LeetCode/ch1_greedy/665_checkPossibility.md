## [665. 非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/)

给你一个长度为`n` 的整数数组，请你判断在 最多 改变 `1` 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的` i (0 <= i <= n-2)`，总满足` nums[i] <= nums[i + 1]`。

**示例 1：**

```
输入: nums = [4,2,3]
输出: true
解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
```

**示例 2：**

```
输入: nums = [4,2,1]
输出: false
解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
```

#### 解题思路

假设存在`a,b,c`三个元素，然后`a<=b`满足，那么对于`c`而言总共有下述几种情况：

- `a<=b<=c`：那就已经满足条件
- `a<=b>c`：① 如果`c>=a`，那显然令`b=c`留个后续的空间更大 ② 如果`c<a`，那只能`c=b`了

**采取的贪心策略：每次使得当前的递增是"最小递增"**

C++实现：

```cpp
class Solution {
public:
    bool checkPossibility(vector<int> &nums) {
        if (nums.size() <= 2)
            return true;
        int cnt = 0;
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] < nums[i - 1]) {
                if (cnt == 1)
                    return false;
                if (i - 2 < 0) {
                    nums[i - 1] = nums[i] = min(nums[i], nums[i - 1]);
                } else if (nums[i] >= nums[i - 2])
                    nums[i - 1] = nums[i];
                else
                    nums[i] = nums[i - 1];
                cnt += 1;
            }
        }
        return true;
    }
};
```

Python实现：

```python

```

