(self.webpackChunkblog=self.webpackChunkblog||[]).push([[730],{12730:n=>{n.exports="## [81. 搜索旋转排序数组 II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)\n\n假设按照升序排序的数组在预先未知的某个点上进行了旋转。\n\n( 例如，数组 `[0,0,1,2,2,5,6]` 可能变为 `[2,5,6,0,0,1,2] `)。\n\n编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 `true`，否则返回 `false`。\n\n**示例 1：**\n\n```\n输入: nums = [2,5,6,0,0,1,2], target = 0\n输出: true\n```\n\n**示例 2：**\n\n```\n输入: nums = [2,5,6,0,0,1,2], target = 3\n输出: false\n```\n\n#### 解题思路\n\n即使数组被旋转过，我们仍然可以利用这个数组的递增性，使用二分查找。对于当前的中点，如果它指向的值小于等于右端，那么说明右区间是排好序的；反之，那么说明左区间是排好序的。如果目标值位于排好序的区间内，我们可以对这个区间继续二分查找；反之，我们对于另一半区间继续二分查找。\n\n注意，因为数组存在重复数字，如果中点和左端的数字相同，我们并不能确定是左区间全部相同，还是右区间完全相同。在这种情况下，我们可以简单地将左端点右移一位，然后继续进行二分查找。\n\nC++实现：\n\n```c++\nclass Solution {\npublic:\n    bool search(vector<int> &nums, int target) {\n        int left = 0, right = nums.size() - 1, mid;\n        while (left <= right) {\n            mid = (left + right) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[mid] == nums[left])\n                left += 1;\n            else if (nums[mid] > nums[left]) {  // 左边升序\n                if (target >= nums[left] && target < nums[mid])\n                    right = mid - 1;\n                else\n                    left = mid + 1;\n            } else {  // 右边有序\n                if (nums[mid] < target && nums[right] >= target)\n                    left = mid + 1;\n                else\n                    right = mid - 1;\n            }\n        }\n        return false;\n    }\n};\n```\n\nPython实现：\n\n```python\nclass Solution:\n    def search(self, nums: List[int], target: int) -> bool:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return True\n            elif nums[left] == nums[mid]:\n                left += 1\n            elif nums[mid] <= nums[right]:\n                # 右边区有序\n                if nums[mid] < target <= nums[right]:\n                    left = mid + 1\n                else:\n                    right = mid - 1\n            else:\n                # 左区间有序\n                if nums[left] <= target < nums[mid]:\n                    right = mid - 1\n                else:\n                    left = mid + 1\n        return False\n```\n\n"}}]);