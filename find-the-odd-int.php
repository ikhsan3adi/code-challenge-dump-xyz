<?php
function findIt(array $seq): int
{
  $set = array_unique($seq);
  foreach ($set as $value) {
    $count = count(array_filter($seq, function ($v) use ($value) {
      return $v === $value;
    }));
    if ($count % 2 === 1) return $value;
  }
}

echo findIt([1, 2, 2, 1, 3, 3, 3, 3, 4]);
