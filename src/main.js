require("@babel/plugin-transform-runtime")
require("webpack-hot-middleware/client?reload=true")
require("./main.css")
require("./images/link.jpg")
require("./index.html")

var a = async () => {
  await console.log("Hello from the future!");
  console.log("Done");
}

a()
