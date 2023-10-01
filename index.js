const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.send("Hello");
});

app.post("/user", (req, resp) => {
  resp.send("Hello from post to send data");
});
app.listen(5000);
