import fs from "fs";

// Write "Hello Node" to welcome.txt
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("welcome.txt has been created!");
});

// Read and log contents from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Contents of hello.txt:", data);
});
