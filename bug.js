function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // This line may throw an error if a or b are not numbers
}