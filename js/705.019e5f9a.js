(self.webpackChunkblog=self.webpackChunkblog||[]).push([[705],{56705:e=>{e.exports="## [406. 根据身高重建队列](https://leetcode-cn.com/problems/queue-reconstruction-by-height/)\n\n假设有打乱顺序的一群人站成一个队列，数组 `people` 表示队列中一些人的属性（不一定按顺序）。每个 `people[i] = [hi, ki]` 表示第` i` 个人的身高为` hi `，前面 正好 有 `ki `个身高大于或等于` hi `的人。\n\n请你重新构造并返回输入数组 `people `所表示的队列。返回的队列应该格式化为数组 `queue` ，其中 `queue[j] = [hj, kj] `是队列中第 `j `个人的属性（`queue[0]` 是排在队列前面的人）。\n\n**示例 1：**\n\n```\n输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]\n输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n解释：\n编号为 0 的人身高为 5 ，没有身高更高或者相同的人排在他前面。\n编号为 1 的人身高为 7 ，没有身高更高或者相同的人排在他前面。\n编号为 2 的人身高为 5 ，有 2 个身高更高或者相同的人排在他前面，即编号为 0 和 1 的人。\n编号为 3 的人身高为 6 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。\n编号为 4 的人身高为 4 ，有 4 个身高更高或者相同的人排在他前面，即编号为 0、1、2、3 的人。\n编号为 5 的人身高为 7 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。\n因此 [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] 是重新构造后的队列。\n```\n\n**示例 2：**\n\n```\n输入：people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]\n输出：[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]\n```\n\n#### 解题思路\n\n先按照从高到矮的顺序进行排序（如果身高一样，将前后人数少的排在前面）；然后针对每个元素，只要把它插入到第`people[i][1]`的位置即可（因为在它前面的始终满足身高大于等于它）\n\n**采取的贪心策略：前面的所有身高大于当前的身高**\n\nC++实现：\n\n```cpp\nclass Solution {\npublic:\n    vector<vector<int>> reconstructQueue(vector<vector<int>> &people) {\n        sort(people.begin(), people.end(),\n             [](vector<int> a, vector<int> b) { return a[0] == b[0] ? a[1] < b[1] : a[0] > b[0]; });\n        for (int i = 0; i < people.size(); ++i) {\n            people.insert(people.begin() + people[i][1], people[i]);\n            people.erase(people.begin() + i + 1);\n        }\n        return people;\n    }\n};\n```\n\nPython实现：\n\n```python\nclass Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        people.sort(key=lambda k: (-k[0], k[1]))\n        people = deque(people)\n        n = len(people)\n        for i in range(n):\n            p = people[i]\n            people.remove(p)\n            people.insert(p[1], p)\n        return list(people)\n```\n\n"}}]);