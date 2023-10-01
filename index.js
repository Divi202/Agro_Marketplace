// connection to db
require("./db/config");

const express = require("express");
const app = express();

// import user schema
const User = require("./db/Schema/User");
// import vendor schema
const Vendor = require("./db/Schema/Vendor");
// // Midlle ware to convert input taken through resp into json
app.use(express.json());
// Get req
app.get("/", (req, resp) => {
  resp.send("<h1>Agro Marketplace API </h1>");
});
// post req to save data in db
app.post("/user", async (req, resp) => {
  if (req.body.usertype == "user") {
    const data = new User(req.body);
    const result = await data.save();
    resp.send(result);
    console.log(result);
  } else if (req.body.usertype == "vendor") {
    const data = new Vendor(req.body);
    const result = await data.save();
    resp.send(result);
    console.log(result);
  } else {
    resp.send("Error! Choose btw user or vendor");
  }
});

app.listen(5000);
