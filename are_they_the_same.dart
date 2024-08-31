// 6 kyu
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/dart

void main(List<String> args) {
  print(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [121, 14641, 20736, 361, 25921, 361, 20736, 361],
    ),
  );
}

bool comp(List<int> a1, List<int> a2) {
  if (a1.length != a2.length) return false;
  for (var e in a1) {
    final i = a2.indexWhere((f) => f == e * e);
    if (i == -1) return false;
    a2.removeAt(i);
  }
  return true;
}
