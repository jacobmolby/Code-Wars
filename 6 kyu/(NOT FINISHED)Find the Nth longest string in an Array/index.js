function longest(arr, n) {
  let noWords = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) noWords = true;
  }

  if (!noWords) {
    return arr[n - 1];
  } else {
    let sorted = [...arr].sort((a, b) => b.length - a.length);
    console.log(sorted);

    return sorted[n - 1];
  }
}

// for (let i = 0; i < lengths.length; i++) {
//   sorted.push(1);
// }
//console.log(sorted);
console.log(
  longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l'], 1)
);

console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'], 1));

//console.log(longest(['Hello', 'World', 'Codewars', 'Katas'], 3));
