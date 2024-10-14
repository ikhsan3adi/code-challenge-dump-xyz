// https://leetcode.com/problems/two-sum/description/

#include <vector>
#include <iostream>

class Solution
{
public:
  std::vector<int> twoSum(std::vector<int> &nums, int target)
  {
    for (int i = 0; i < nums.size(); i++)
    {
      for (int j = i + 1; j < nums.size(); j++)
      {
        if (nums[i] + nums[j] == target)
        {
          return {i, j};
        }
      }
    }
    return {};
  }
};

int main(int argc, char const *argv[])
{
  Solution s = Solution();
  std::vector<int> nums = {2, 3, 4, 5, 1};

  std::vector<int> twoSum = s.twoSum(nums, 3);

  printf("%d %d", twoSum[0], twoSum[1]);
  return 0;
}
