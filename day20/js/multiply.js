function multiply(a, b) {
  return a * b;
}

function showResult(number) {
  console.log(number);
}

export { showResult };
// Export default can be used only once in a file:
export default multiply;
