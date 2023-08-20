//Path problem  /a/./b/../../c  ->/C
function findCanonicalPath(path) {
  var stacks = [];

  var chars = path.split("/");
  chars.forEach((el) => {
    if (!stacks.length && el === "..") {
      stacks.pop();
    } else if (el !== "" && el !== ".." && el !== ".") {
      stacks.push(el);
    }
  });
  if (stacks.length === 0) {
    return "/";
  }
  let res = "";
  while (!stacks.length) {
    res = stacks.pop() + "/" + res;
  }
  return res;
}

console.log(findCanonicalPath("/a/b/../../c"));
