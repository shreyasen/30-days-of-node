const fs = require("fs");

const fileContent = fs.readFileSync("data.txt").toString();
const pattern = /man/gim; //gim means global, case insensitive, multiline match
const arr = fileContent.match(pattern);
console.log(arr);
console.log("No of occurances " + arr.length);

// ------------------------------------------------------- //

var str = "rjbitdemo@gmail.com";
var emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str.match(emailPattern);
console.log(res);
if (res) {
  console.log("Valid email address");
} else {
  console.log("Please enter a valid email address");
}

// ------------------------------------------------------------------- //

var str = "FFFFFF";
var hexPattern = /^[a-fA-F0-9]+$/g;

var res = str.match(hexPattern);
if (res) {
  console.log("Valid Hexadecimal number");
} else {
  console.log("Not a valid Hexadecimal number");
}
