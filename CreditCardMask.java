/*
 * https://www.codewars.com/kata/5412509bd436bd33920011bc/train/java
 * 7 kyu
 */

public class CreditCardMask {
  public static void main(String[] args) {
    System.out.println(maskify("AKUNOMORKARTUKREDIT"));
    System.out.println(maskify("1234567890"));
    System.out.println(maskify("1"));
  }

  public static String maskify(String str) {
    String output = "";
    for (int i = 0; i < str.split("").length; i++) {
      if (i < str.length() - 4) {
        output += "#";
        continue;
      }
      output += str.split("")[i];
    }
    return output;
  }
}
