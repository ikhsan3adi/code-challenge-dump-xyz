<?php
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/php
// 7 kyu

function number(array $bus_stops)
{
  return array_reduce(
    $bus_stops,
    fn($carry, $item) => [$carry[0] + $item[0] - $item[1], 0],
    [0, 0]
  )[0];
}

print_r(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
