const input = [4, 2, 0, 2, 1];
function sum(input) {
  if (input.length === 0) {
    return 0;
  } else {
    return input.shift() + sum(input);
  }
}
console.log(sum(input));
