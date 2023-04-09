//Chapter - 1 : Servers
const http = require("http");
const fs = require("fs");

const PORT = 8000;

// create simple server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server Working Success");
});

//serve string
const server1 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.write("Welcome to node!");
  res.end();
});

//server html file
const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.end(data);
    }
  });
});

//server json data
const server3 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const jsonData = {
    name: "Shreya Sen",
    age: 28,
    company: "EY",
    address: {
      state: "WB",
      pin: 712232,
    },
  };
  res.end(JSON.stringify(jsonData));
});

//serve a pdf file
const server4 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/pdf" });
  fs.readFile("Document.pdf", (err, data) => {
    if (err) {
      res.json({ status: "error", msg: err });
    } else {
      res.end(data);
    }
  });
});

//server audio
const server5 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "audio/mp3" });
  const exists = fs.existsSync("audio.mp3");
  if (exists) {
    const rstream = fs.createReadStream("audio.mp3");
    rstream.pipe(res);
  } else {
    res.end("its a 404");
  }
});

//server video
const server6 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  const exists = fs.existsSync("audio.mp3");
  if (exists) {
    const rstream = fs.createReadStream("video.mp4");
    rstream.pipe(res);
  } else {
    res.end("its a 404");
  }
});

server6.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port ${PORT}`);
});
