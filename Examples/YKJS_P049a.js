function makeAdder (x) {
  // parameter x is an inner varible

  // inner function 'add()' uses 'x', so
  // it has 'closure' over it
  function add(y) {
    console.log("in function add. y = " + y)
    return y + x;
  };
  return add;
}

// plusOne gets a reference to the inner add()
// function with the closure over the x parameter of 
// the outer makeAdder()
var plusOne = makeAdder( 1 ); // loads  makeAdder with 1, then add is returned as a function.
var plusTen = makeAdder(10);  // loads  makeAdder with 10, then add is returned as a function.

console.log(plusOne(3)); // This calls add but retains the x value of 1.

console.log(plusOne(41)); // This calls add but retains the x value of 1.

console.log(plusTen(13)); // This calls add but retains the x value of 10.