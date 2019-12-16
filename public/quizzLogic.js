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

 


/*
async function rawData  ()
{

  const response=await fetch('/quizz/data')
  const data = await response.json();
  return data
    
}

async function doData(){

data= await rawData()


data.forEach(question => {
  questionElement.innerText = data.question
  const shuffledAnswers = question.answers.sort(() => Math.random() - .5)
  buttOne.innerText = shuffledAnswers[0]
  buttwo.innerText = shuffledAnswers[1]
  butthree.innerText = shuffledAnswers[2]
  buttfour.innerText = shuffledAnswers[3]
  //console.log(question)

})
}




startButton.addEventListener('click', doData)

/*
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


/*
const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]*/