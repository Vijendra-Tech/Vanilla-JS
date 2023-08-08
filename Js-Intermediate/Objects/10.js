//class patetrn - synthetix sugar built top on Prototype layer

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJs = new Workshop("Rana");
deepJs.ask("Is it really a class");
