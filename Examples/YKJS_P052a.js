function foo() {
  console.log( this.bar );
  console.log( bar + "\n\n"); // JAB I added this.  Is the 'this' keywork the only way we can access the object's bar?
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
}

// ---keep 'em separated
foo();
obj1.foo()
foo.call( obj2 );
new foo();