function foo(a, b) {
  // Handle null values by treating them as 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b; // Perform addition
}

console.log(foo(1, null)); // Output: 1
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, 2)); // Output: 3

//Alternative solution that throws an error
function foo2(a,b){
  if (a === null || b === null){
    throw new Error('Null values are not allowed');
  }
  return a + b;
}

//console.log(foo2(1, null)); //Uncomment to see the error
console.log(foo2(1,2)); //Output: 3