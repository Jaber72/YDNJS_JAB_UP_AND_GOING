function outer() {
  var a= 1;
    function inner(){
      var b = 2;
      console.log(b);
      console.log(a); // Inner function has access to both a and b.
    }

    inner();
    // console.log(b); // outer function cannot see b.
    console.log(a);
}

outer();
// console.log(b);
// console.log(a);
