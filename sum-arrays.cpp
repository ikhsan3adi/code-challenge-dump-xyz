// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/cpp

#include <vector>

int sum(std::vector<int> nums)
{
  int sum = 0;
  for (int i = 0; i < nums.size(); i++)
  {
    sum += nums[i];
  }
  return sum;
}