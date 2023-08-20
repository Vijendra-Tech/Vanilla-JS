/**
 * Recursion Pattern :
 * Wrapperr funnction
 * Accumulation
 */

//Accumulator pattern

function jointEle(array, joinString) {
  function rescursive(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return rescursive(index + 1, resultSoFar + joinString);
    }
  }
  return rescursive(0, "");
}
