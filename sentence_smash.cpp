// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/cpp

#include <iostream>
#include <vector>
#include <string>

std::string smash(const std::vector<std::string> &words)
{
  std::string sentence;
  for (int i = 0; i < words.size(); i++)
  {
    sentence += " " + words[i];
  }

  const char *t = " \t\n\r\f\v";
  sentence.erase(0, sentence.find_first_not_of(t));
  sentence.erase(sentence.find_last_not_of(t) + 1);

  return sentence;
}

int main(int argc, char const *argv[])
{
  std::cout << smash({"Ikhsan", "Satriadi"});
  return 0;
}
