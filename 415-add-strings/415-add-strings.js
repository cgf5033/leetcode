/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//   return String(BigInt(num1) + BigInt(num2));
// };

var addStrings = function(num1, num2) {
  let n1 = num1.split('').reverse();
  let n2 = num2.split('').reverse();
  let result = '';
  let rem = 0;
  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
      let current = '';
      if (i < num1.length && i < num2.length) {
          current = String(Number(n1[i]) + Number(n2[i]) + Number(rem))
      } else if (i < num1.length) {
          current = String(Number(n1[i]) + Number(rem));
      } else {
          current = String(Number(n2[i]) + Number(rem));
      }
      if (current.length > 1) {
          rem = current[0];
          current = current[1];
      } else {
          rem = 0;
      }
      result = current + result;
  }
  return rem ? rem + result : result;
};