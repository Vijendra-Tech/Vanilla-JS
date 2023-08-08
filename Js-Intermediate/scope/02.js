//Functional Expression -puy their identifier in their on Scope

function fd() {
  console.log("From FD");
}

var fe = function anotherTeacher() {
  console.log(anotherTeacher);
};

console.log(fd());
console.log(fe());
console.log(anotherTeacher);


