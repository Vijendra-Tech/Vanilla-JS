
function removeDup(str) {
  return [...str]
    .reduce((acc, char) => {
      if (char !== acc[acc.length - 1]) {
        acc.push(char);
      }
      return acc;
    }, [])
    .join("");
}

const inputString = "aaaaaaabbbbbbbccccccddddd";
const output = removeDup(inputString);
console.log(output); // Output: "abcd"

