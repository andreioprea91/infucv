const mongoose = require("mongoose");

const quesModuleTwo = new mongoose.Schema({
  
  question: {
    type: String,
    required: true
  },
  answers: {
    A: {
      type: String,
      
    },
    B: {
      type: String,
      
    },
    C: {
      type: String,
      
    },
    D: {
      type: String,
      
    },
    E: {
      type: String
    },
    F: {
      type: String
    },
    G: {
      type: String
    },
    H: {
      type: String
    },
    I: {
      type: String
    }
  },
  correctAnswer: {
    type: String,
    
  }
});

module.exports = mongoose.model("Question", quesModuleTwo);
