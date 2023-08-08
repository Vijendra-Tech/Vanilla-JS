function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var dJs = new Workshop("Rana");

console.log(dJs.constructor === Workshop);

console.log(dJs.__proto__ === Workshop.prototype);
console.log(Object.getPrototypeOf(dJs) === Workshop.prototype);
