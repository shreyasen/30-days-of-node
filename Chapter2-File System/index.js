const fs = require("fs");

//synchronous --> blocking
//asynchronous --> non-blocking

//read file asynchronously
fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("async " + data);
});

//read file synchronously
const data1 = fs.readFileSync("message.txt", "utf-8");
console.log("sync " + data1);

// --------------------------------------- //

//write file asynchronously
const content = "Hello world!";
fs.writeFile("message.txt", content, (err) => {
  if (err) {
    throw err;
  }
  console.log("written successfully async!");
});

//write file synchronously
fs.writeFileSync("message.txt", content);
console.log("written successfully sync!");

// ---------------------------------------------------------- //

const newData = "This is added newly.";
fs.appendFile("message.txt", newData, (err) => {
  if (err) {
    throw err;
  }
  console.log("appended successfully async");
});

fs.appendFileSync("message.txt", newData);
console.log("appended successfully sync");

// ------------------------------------------------------------ //

fs.rename("test.txt", "mymessage.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("renamed successfully async");
});

fs.renameSync("test2.txt", "mymessage2.txt");
console.log("renamed successfully sync");

// ----------------------------------------------------------------------- //

fs.unlink("test3.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("deleted successfully async");
});

fs.unlinkSync("test4.txt");
console.log("deleted successfully sync");
