// Arrow with this

var teacher = "Median";

var ctx = {
  teacher: "Rana",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

ctx.ask.call(ctx, "Where is this ???");
