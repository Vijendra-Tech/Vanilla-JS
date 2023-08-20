function upper(strings, ...values) {
  var ret = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      ret += String(values[i - 1]).toUpperCase();
    }
    ret += strings[i];
  }

  return "";
}

var name = "Rana";
var twitter = "vkrana";
topics = "Js very recent";

console.log(
  upper`
       Hello ${name} (@${twitter}), Welcome to Js ${topics}
    `
);
