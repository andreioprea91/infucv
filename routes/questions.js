const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// All Authors Route
router.get("/", (req, res) => {
  res.render("questions/index");
});
// new question route
router.get("/new", (req, res) => {
  res.render("questions/new", { question: new Question() });
});

// Create Author Route
router.post("/", async (req, res) => {
  const question = new Question({
    
    question: req.body.question,
    A: req.body.A,
    B: req.body.B,
    C: req.body.C,
    D: req.body.D,
    E: req.body.E,
    F: req.body.F,
    G: req.body.G,
    H: req.body.H,
    I: req.body.I,
    correctAnswer: req.body.correctAnswer
  });
  try {
    await question.save()
    res.redirect(`questions`)
  } catch {
    res.render('questions/new', {
      
      errorMessage: 'A aparut o eroare, asigurativa ca a-ti introdus datele corecte'
    })
  }
  
});

module.exports = router;
