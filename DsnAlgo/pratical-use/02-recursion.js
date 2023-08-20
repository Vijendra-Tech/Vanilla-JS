//Recursion

var count = 0;

function callMe() {
  ++count;
  if (count === 10) {
    return 10;
  }
  console.log("Log-----");
  return callMe();
}

console.log(callMe());

/**
 * Rule of recursion
 * 1. Identify base case
 * 2.Identify recursive cases
 * 3.Return where approriate
 * 4.Write procedures for each case that bring you closer to the base casess
 * 
 * 
 */

// var callMySelf = ()=>{
//       if( someCases ===true){
//         //base case
//         return
//       }else{
//         //rescursive 
//       }

//       return
// }
