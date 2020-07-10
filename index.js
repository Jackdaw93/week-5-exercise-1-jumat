const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;
const path = require("path");

//Kalau ada file css ini baru dibuat
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
