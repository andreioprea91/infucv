const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const buttOne=document.getElementById('b1');
const buttwo=document.getElementById('b2');
const butthree=document.getElementById('b3');
const buttfour=document.getElementById('b4');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const result=document.getElementById('correct')
let questions, currentQuestionIndex






fetch('/quizz/data')
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
    currentQuestionIndex = 0
    startButton.innerText="Restart"
    
    setNextQuestion();
  };


  function setNextQuestion() {
    //resetState()
    showQuestion(questions[currentQuestionIndex])
  }


  function showQuestion(question) {
  questionElement.innerText = question.question
  const shuffledAnswers = question.answers.sort(() => Math.random() - .5)
  buttOne.innerText = shuffledAnswers[0]
  buttwo.innerText = shuffledAnswers[1]
  butthree.innerText = shuffledAnswers[2]
  buttfour.innerText = shuffledAnswers[3]
  
       
  }



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

 