//Infinite Recursion

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};
var dJs = new Workshop("Rana");

dJs.ask = function (q) {
  this.ask(q.toUpperCase());
};

dJs.ask("OOps, inf rescursion");
