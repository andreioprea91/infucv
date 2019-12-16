const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/", (req, res) => {
  const scripts = [{ script: "quizzLogic.js" }];

  res.render("quizz/test", { scripts: scripts });
});

router.get("/data", async (req, res) => {
  const response = await Question.find({});

  res.send(response);
});

module.exports = router;


