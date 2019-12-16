const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// All questions Route
router.get("/", async (req, res) => {

  try {
    const questions = await Question.find({})
    res.render('questions/index', { data: questions })
       
  } catch { res.redirect('/')}
});

// new question route
router.get("/new", (req, res) => {
  res.render("questions/new", { question: new Question() });
});

// Create question route
router.post("/", async (req, res) => {

  const question = new Question({
    
    question: req.body.question,
    correct_answer: req.body.a,
    answers:[req.body.a,req.body.b,req.body.c,req.body.d]
    
  });
  try {
    await question.save()
    res.redirect(`/`)
    
  } catch {
    res.render('questions/new', {errorMessage: 'Error, make sure you fill all fields' })
  } 
});

module.exports = router;
