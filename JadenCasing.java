/*
 JadenCasingStrings
 https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/java
 7 kyu
 */
public class JadenCasing {
  public static void main(String[] args) {
    System.out.println(new JadenCasing().toJadenCase("Siapa yang Mau Sprei gratis"));
  }

  public String toJadenCase(String phrase) {
    if (phrase == null || phrase.isBlank()) {
      return null;
    }
    String output = "";
    for (String e : phrase.split(" ")) {
      output += e.substring(0, 1).toUpperCase() + e.substring(1) + " ";
    }
    return output.trim();
  }
}