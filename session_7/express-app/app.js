const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const bodyParser = require("body-parser");

const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { Mongoose } = require("mongoose");

const PORT = 8000;

app.use(express.static('public'));
// mongodb+srv://artekbsh:<password>@cluster0.mw12xuc.mongodb.net/

mongoose.connect("mongodb+srv://artekbsh:arta00@cluster0.mw12xuc.mongodb.net/")
.then(result => {
  app.listen(PORT, (error) => {
    console.log("Connected to database")
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
})
.catch(err => console.log(err))

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found" });
});




