<?php

// 6 kyu
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/php

function uniqueInOrder($iterable)
{
  $values = is_array($iterable) ? $iterable : str_split($iterable);
  $output = [];
  $temp = null;
  foreach ($values as $value) {
    if (!$value) continue;
    if ($value !== $temp) array_push($output, $value);
    $temp = $value;
  }
  return $output;
}

print_r(uniqueInOrder([]));
