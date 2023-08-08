//new keyword - Constructor call

 var teacher ="Rana"

function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new  doing here");

