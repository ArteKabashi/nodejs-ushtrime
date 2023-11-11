const express = require("express");
const app = express();
const PORT = 3000;

const player = {
  "lionel messi": {
    "full name": "Lionel Andres Messi",
    age: "36",
  },
  "cristiano ronaldo": {
    "full name": "Cristiano Ronaldo Andres Messi",
    age: "39",
  },
  unkown: {
    "full name": "unknown",
    age: "unkown",
  },
};

app.get("/", (req, res) => {
  // console.log("Hello from Express");
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const shortName = req.params.name.toLowerCase();
  if (player[shortName]) {
    res.json(player[shortName]);
  } else {
    res.json(player[unkown]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
