/**
 * Template String
 *  Interpolated Literals
 *
 */

function getMyName() {
  return "Rana";
}

console.log(`This is a diffrent str ${getMyName()}`);

/**
 * Tagged String
 */

var amount = 45.9;
var msg = formatCurrency`
  The amount is ${amount}
`;

function formatCurrency(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    
  }
}
