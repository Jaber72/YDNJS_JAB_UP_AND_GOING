var foo = {
  a: 42
  };

// create 'bar' and link it to 'foo'
var bar = Object.create( foo);

bar.b = "Hello World"
console.log(bar.b);
console.log(bar.a);
console.log(foo);
console.log(bar);  

/* 
output of this program:

Hello World
42
{ a: 42 }
{ b: 'Hello World' }

*/