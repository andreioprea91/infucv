const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById('question-container')
const btnOne = document.getElementById("b1");
const btnTwo = document.getElementById("b2");
const btnThree = document.getElementById("b3");
const btnFour = document.getElementById("b4");
const questionElement = document.getElementById("question");

const result = document.getElementById("correct");
let questions, currentQuestionIndex;

fetch("/quizz/data")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions;
  })
  .catch(err => {
    console.error(err);
  });

startGame = () => {
  currentQuestionIndex = 0;
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  nextButton.classList.remove('hide')

  

  setNextQuestion();

  
  
};

function setNextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
  
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
  btnOne.innerText = shuffledAnswers[0];
  btnTwo.innerText = shuffledAnswers[1];
  btnThree.innerText = shuffledAnswers[2];
  btnFour.innerText = shuffledAnswers[3];

  if (questions.length === currentQuestionIndex +1) {
    startButton.classList.remove('hide')
    startButton.innerText = 'Restart'
    nextButton.classList.add('hide')
  }
 

  btnOne.addEventListener("click", () => {
    if (btnOne.innerText === question.correct_answer) {
      result.innerText = "correct";
    } else {
      result.innerText = "False";
    }
  });
  btnTwo.addEventListener("click", () => {
    if (btnTwo.innerText === question.correct_answer) {
      result.innerText = "correct";
    } else {
      result.innerText = "False";
    }
  });
  btnThree.addEventListener("click", () => {
    if (btnThree.innerText === question.correct_answer) {
      result.innerText = "correct";
    } else {
      result.innerText = "False";
    }
  });
  btnFour.addEventListener("click", () => {
    if (btnFour.innerText === question.correct_answer) {
      result.innerText = "correct";
    } else {
      result.innerText = "False";
    }
  });

}
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  result.innerText = "";
  currentQuestionIndex++;
  setNextQuestion();
   
});
