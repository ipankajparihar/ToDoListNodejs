const express = require("express");

const port = 8000;

const app = express();

app.use(express.urlencoded());
app.use("/", require("./routes"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./assets"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error running the server at :${err}`);
  }
  console.log(`server is running at port ${port}`);
});
