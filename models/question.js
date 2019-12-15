const mongoose = require("mongoose");

const quesModuleTwo = new mongoose.Schema({
  
  
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Object,
    
  
  },
  correct_answer: {
    type: String,
    
  }

});

module.exports = mongoose.model("Question", quesModuleTwo);
