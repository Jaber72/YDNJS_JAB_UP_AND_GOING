var a = 2;

foo(); // works because foo declaration is hoisted

function foo() {
  a = 3;

  console.log("in the function a = " + a);
  var a; // hoisted so it is declared in time at the beginning of the function
}

console.log("out the function a = " + a);