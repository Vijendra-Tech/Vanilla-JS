//four ways to call function in Javacript- call, apply , bind, new

var teacher = "Rana";

function ask() {
  console.log(this.teacher);
}
function askAgain() {
  "use strict";
  console.log(this.teacher);
}

ask();

// askAgain();
// var ctx = {
//   teacher: "rana",
//   ask() {
//     console.log(this.teacher);
//   },
// };
// new (ctx.ask.bind(ctx))("What the hell!!");
