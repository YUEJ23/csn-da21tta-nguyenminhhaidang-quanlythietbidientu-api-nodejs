require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewengine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 5500;
const hostname = process.env.HOST_NAME;
const apiRoute = require("./routes/api.js");
//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

app.use("/api/v1/", apiRoute);
//khai báo route
app.use("/", webRoutes);

//test connection

// simple query
connection.query("SELECT * FROM sanpham", function (err, results, fields) {
  console.log(">>>results=", results); // results contains rows returned by server
});

connection.query("SELECT * FROM nhacungcap", function (err, results, fields) {
  console.log(">>>results=", results); // results contains rows returned by server
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
