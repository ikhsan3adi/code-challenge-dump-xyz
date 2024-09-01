void main(List<String> args) {
  print(meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill",
  ));
}

// 6 kyu
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/dart

String meeting(String s) {
  return '(' +
      (s
              .toUpperCase()
              .split(';')
              .map((e) => e.split(':').reversed.join(', '))
              .toList()
            ..sort())
          .join(')(') +
      ')';
}
