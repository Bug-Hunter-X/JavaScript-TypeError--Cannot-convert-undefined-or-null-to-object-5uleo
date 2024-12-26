function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Inputs must be numbers.');
    return null; // Handle non-numeric inputs or null
  }
  return a + b;
}