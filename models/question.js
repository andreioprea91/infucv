const mongoose = require("mongoose");

const quesModuleTwo = new mongoose.Schema({
  
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Object,
    required: true
    
  
  },
  correct_answer: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("Question", quesModuleTwo);
