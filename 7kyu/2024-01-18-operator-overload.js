// We have a class named 'Foo' with a 'val' attribute.

// var foo = new Foo(2);     // foo.val = 2;
// var boo = new Foo(3);    // boo.val = 3;

// We want to be able to sum two Foo object using the '+' operator.

// foo + boo // => must return 5
var Foo = function (value) {
  this.val = value;
};

Foo.prototype.valueOf = function () {
  return this.val;
};
