/*This works because each "child" function or indented sub function can see the less indented's function's variables.

Different from C family languages where scope is within {} only

Javascript, why must you rain chaos down on us all.

*/
function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;
      console.log(a, b, c);
    }

    baz();
    console.log (a, b);
  }
  bar();
  console.log(a)
}
foo();