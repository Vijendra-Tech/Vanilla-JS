//OLOO pattern

var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question);
  },
};

var AnotherWorkshop = Object.assign(Object.create(Workshop), {
  speakup(msg) {
    this.ask(msg.toUpperCase());
  },
});

var JsRec = Object.create(AnotherWorkshop);
JsRec.setTeacher("Rana");
JsRec.speakup("But is it cleaner??");
