// 7 kyu
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/dart

void main(List<String> args) {
  print('10.5' + '10');
  // print(capitalize('asdasdasd'));
}

List<String> capitalize(String x) {
  return [x, x]
      .asMap()
      .map((i, x) => MapEntry(
          i,
          x
              .split('')
              .asMap()
              .map((j, e) => MapEntry(
                  j,
                  j % 2 == (i == 0 ? 0 : 1)
                      ? e.toUpperCase()
                      : e.toLowerCase()))
              .values
              .join()))
      .values
      .toList();
}
