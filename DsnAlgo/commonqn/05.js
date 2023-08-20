//A String of Parenthis matches

function matchPar(str) {
  const openP = new Set(["{", "(", "["]);
  const closedP = new Set([")", "]", "}"]);
  const bracketMatch = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];
  var chars = [...str];
  console.log(chars);
  chars.forEach((el) => {
    if (openP.has(el)) {
      stack.push(el);
    } else if (closedP.has(el)) {
        if(!stack.length){
           return false
        }else{
            const lastUnclosed = stack.pop()
            if(bracketMatch[lastUnclosed] !== el){
               return false
            }
        }
    }
  });
  return stack.length === 0;
}

console.log(matchPar("{}["));
