//arrow  function

var ctx = {
  teacher: "Rana",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  },
};

ctx.ask("Is this lexical 'this?");
