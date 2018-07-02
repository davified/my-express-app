const express = require("express");
const PORT = 3000;

const app = express();

const logA = (req, res, next) => {
  console.log("A...");
  next();
};
const logB = (req, res, next) => {
  console.log("B...");
  next();
};

app.use(logA);
app.use(logB);

const thisMayCauseError = () => {
  if (Math.random() > 0.5) {
    return new Error("this is a simulated error");
  }
  return "ok";
};

app.get("/", (req, res, next) => {
  console.log("received GET request for /");

  const response = thisMayCauseError();

  if (response === "ok") {
    res.send("all good!");
  } else {
    next(response);
  }
});

app.listen(PORT, () => console.log(`app started on port ${PORT}`));
