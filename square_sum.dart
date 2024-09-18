// https://www.codewars.com/kata/515e271a311df0350d00000f/train/dart

void main(List<String> args) {
  print(squareSum([]));
}

int squareSum(List<int> numbers) =>
    numbers.map((e) => e * e).reduce((a, b) => a + b);
