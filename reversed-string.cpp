// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/cpp

#include <string>
#include <iostream>
using namespace std;

string reverseString(string str)
{
  string result;

  for (int i = str.size() - 1; i >= 0; i--)
  {
    result += str[i];
  }

  return result;
}

int main(int argc, char const *argv[])
{
  cout << reverseString("anjay mabar");
  return 0;
}
