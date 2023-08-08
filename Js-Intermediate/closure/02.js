function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("Waht is Closure");
myQuestion();
