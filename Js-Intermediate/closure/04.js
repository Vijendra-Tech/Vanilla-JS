//Modular pattern

// var workshop = {
//   teacher: "Rana",
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// workshop.ask("Is this really a module?");

//Without idea of closure , Information can not be hidden.

var workshop = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  /** ************** */
  function ask(question) {
    console.log(teacher, question);
  }
})("Rana");

workshop.ask("is it module ,correct?")
