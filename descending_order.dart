void main(List<String> args) {
  print(descendingOrder(123454932435065786));
  print(1230123.toString().split(''));
}

int descendingOrder(n) => int.parse(
    (n.toString().split('').map(int.parse).toList()..sort((a, b) => b - a))
        .join(''));
