//Same fn but asked to execute in two diffrent context

function ask(queestion) {
  console.log(this.teacher, queestion);
}

var cxt1 = {
  teacher: "Rana",
  ask: ask,
};
var cxt2 = {
  teacher: "Rana Bro",
  ask: ask,
};

cxt1.ask("how do I share a method?")
cxt2.ask("how do I share a method?")




