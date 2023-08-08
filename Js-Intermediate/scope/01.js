//lexical scope
"use strict";
var teacher = "kyle";

function otherC() {
  teacher = "Rana";
  topic = "React";
  console.log("%c Welcome ", "color:red");
}

otherC();

console.log(teacher);
console.log(topic);
