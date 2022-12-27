const express = require("express");
const path = require("path");
const PORT = '3001'

const app = express();

app.use("", express.static(path.join(__dirname, "./widget-scripts")));

app.listen(PORT, () => {
  console.log("Widget server started on port 3001");
});
