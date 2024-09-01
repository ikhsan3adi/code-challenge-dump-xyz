<?php

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/php
// 6 kyu

function longestConsec(array $strarr, int $k)
{
  if ($k > count($strarr) || $k <= 0 || empty($strarr)) return '';
  $consecs = [];
  for ($i = 0; $i < count($strarr) - ($k - 1); $i++) {
    $value = implode(array_slice($strarr, $i, $k));
    array_push(
      $consecs,
      [
        'length' => strlen($value),
        'value' => $value,
      ],
    );
  }
  $firstLongest = '';
  foreach ($consecs as $value) {
    if (strlen($firstLongest) < $value['length']) $firstLongest = $value['value'];
  }
  return $firstLongest;
}

// print_r(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// echo "\n";
// print_r(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 2));
// echo "\n";
print_r(longestConsec(["abc", "abcd", "efg", "efghi", "s"], 2));
