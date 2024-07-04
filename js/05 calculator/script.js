const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

console.log ({
  one: calculator.add(3,5), // 8
  two: calculator.sub(6,2), // 4
  three: calculator.mul(14,5534) // 77476
}); 