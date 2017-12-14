function Person(n) {
  this.name = n;
  this.Logname = function() {
    console.log(this.name);
  }
}
var p = new Person('bob');
p.Logname();
