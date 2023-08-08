//this - gives flexibiity to extend functiionality
var teacher ="Rana"


function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "Why?");
}

otherClass();
