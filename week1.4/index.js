//loops
let sumOfTen = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
console.log(sumOfTen);

let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// functions

function add(a, b) {
  return a + b;
}
const ans = add(7, 3);
console.log(ans);

// callback function -> fn in another fn

function run(n) {
  console.log("run  run run! " + n);
}

function life(a, b) {
  const first = run(a);
  const second = run(b);
  return first + second;
}

console.log(life("Nina", "Bunny"));

// Callback Function

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function sumOfSquare(a, b, c) {
  const a1 = square(a);
  const b1 = square(b);
  const c1 = square(c);

  return a1 + b1 + c1;
}

function sumOfCube(a, b, c) {
  const a1 = cube(a);
  const b1 = cube(b);
  const c1 = cube(c);

  return a1 + b1 + c1;
}

console.log(sumOfSquare(1, 2, 3));
console.log(sumOfCube(1, 2, 3));

// highly callback function

function squareNew(n) {
  return n * n;
}
function cubeNew(n) {
  return n * n * n;
}

function sumOfSomething(a, b, fn) {
  const a1 = fn(a);
  const b1 = fn(b);
  return a1 + b1;
}

console.log(sumOfSomething(2, 4, squareNew));
console.log(sumOfSomething(2, 4, cubeNew));
