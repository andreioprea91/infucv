const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const buttOne=document.getElementById('b1');
const buttwo=document.getElementById('b2');
const butthree=document.getElementById('b3');
const buttfour=document.getElementById('b4');
const questionElement = document.getElementById('question')

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
  
  buttOne.addEventListener('click', () => {
    if (buttOne.innerText===question.correct_answer){
      result.innerText="correct"
    }else{
      result.innerText="False"
    }
  })
  buttwo.addEventListener('click', () => {
    if (buttwo.innerText===question.correct_answer){
      result.innerText="correct"
    }else{
      result.innerText="False"
    }
  })
  butthree.addEventListener('click', () => {
    if (butthree.innerText===question.correct_answer){
      result.innerText="correct"
    }else{
      result.innerText="False"
    }
  })
  buttfour.addEventListener('click', () => {
    if (buttfour.innerText===question.correct_answer){
      result.innerText="correct"
    }else{
      result.innerText="False"
    }
  })


  

  }

  



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  result.innerText=''
  currentQuestionIndex++
  setNextQuestion()
})

 