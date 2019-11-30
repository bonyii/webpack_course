//require("./main.css")
require("./main.scss")
require("./images/link.jpg")
require("./index.html")
require("./app.js")

var a = async () => {
  await console.log("Hello from the future!");
  console.log("Done");
}

a()

console.log(`Environment is ${process.env.NODE_ENV}`);
