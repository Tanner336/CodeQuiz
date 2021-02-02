const questionArr = [
  {
    question: 'Which of these is not a heading tag?',
    answers: [
      { text: 'h1', correct: false },
      { text: 'p', correct: true },
      { text: 'h2', correct: false },
      { text: 'h3', correct: false },
    ]
  },
  {
    question: 'Which of these is a paragraph tag?',
    answers: [
      { text: 'h1', correct: false },
      { text: 'p', correct: true },
      { text: 'h2', correct: false },
      { text: 'h3', correct: false },
    ]
  },
  {
    question: 'What tag is required in all HTML documents, and is used to define the title?',
    answers: [
      { text: '<title></title>', correct: true },
      { text: '<br></br>', correct: false },
      { text: '<meta></meta>', correct: false },
      { text: '<body></body', correct: false },
    ]
  },
  {
    question: 'What is considered to be the most popular programming language in the world?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'Ruby', correct: false },
      { text: 'Swift', correct: false },
      { text: 'JavaScript', correct: true },
    ]
  },
  {
    question: 'Which program is used to adding styling and design to a web application/website?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'Local Storage', correct: false },
      { text: 'CSS', correct: true },
      { text: 'JavaScript', correct: false },
    ]
  },
  {
    question: 'Which of these is not a styling method?',
    answers: [
      { text: 'padding', correct: false },
      { text: 'flavor', correct: true },
      { text: 'height', correct: false },
      { text: 'background-color', correct: false },
    ]
  },
  {
    question: 'Which of these is not used in an if/else statment?',
    answers: [
      { text: 'else else', correct: true },
      { text: 'if', correct: false },
      { text: 'if else', correct: false },
      { text: 'else', correct: false },
    ]
  },
  {
    question: 'How is Javascript executed between the "=" sign?',
    answers: [
      { text: 'front to back', correct: false },
      { text: 'back to front', correct: false },
      { text: 'left to right', correct: false },
      { text: 'right to left', correct: true },
    ]
  },
  {
    question: 'What is the value called that defines colors such as the following: #FFFF00?',
    answers: [
      { text: 'RGB Value', correct: true },
      { text: 'Hex Value', correct: false },
      { text: 'Color Value', correct: false },
      { text: 'Decimal Value', correct: false },
    ]
  },
  {
    question: 'CSS stands for ____ Style Sheets...',
    answers: [
      { text: 'Concave', correct: false },
      { text: 'Collapsing', correct: false },
      { text: 'Cascading', correct: true },
      { text: 'Curious', correct: false },
    ]
  },
  {
    question: 'What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?',
    answers: [
      { text: '<title></title>', correct: false },
      { text: '<body></body>', correct: true },
      { text: '<head></head>', correct: false },
      { text: '<br></br>', correct: false },
    ]
  },
  {
    question: 'What tag is used to define a list item (in a bulleted list)?',
    answers: [
      { text: '<ul></ul>', correct: true },
      { text: '<li></li>', correct: false },
      { text: '<ol></ol>', correct: false },
      { text: '<a></a>', correct: false },
    ]
  },
  {
    question: 'In JavaScript, what element is used to store and manipulate text, usually in multiples?',
    answers: [
      { text: 'Strings', correct: false },
      { text: 'Variables', correct: false },
      { text: 'Arrays', correct: true },
      { text: 'Recorders', correct: false },
    ]
  },
  {
    question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
    answers: [
      { text: 'Event', correct: false },
      { text: 'Conditional', correct: false },
      { text: 'Variable', correct: false },
      { text: 'Boolean', correct: true },
    ]
  },
    {
    question: 'In JavaScript, what element is used to store multiple values in a single variable?',
    answers: [
      { text: 'Function', correct: false },
      { text: 'String', correct: false },
      { text: 'Array', correct: true },
      { text: 'Variables', correct: false },
    ]
  },
  {
    question: 'In JavaScript, what is the code to display things in the Inspect tool Console?',
    answers: [
      { text: 'for()', correct: false },
      { text: 'console.log()', correct: true },
      { text: 'function()', correct: false },
      { text: 'let', correct: false },
    ]
  },
  {
    question: 'In JavaScript, which of these is not used as a variable?',
    answers: [
      { text: 'setInterval', correct: true },
      { text: 'var', correct: false },
      { text: 'const', correct: false },
      { text: 'let', correct: false },
    ]
  },
  {
    question: 'In HTML, which is used to link together CSS?',
    answers: [
      { text: 'href', correct: false },
      { text: 'rel', correct: false },
      { text: 'meta', correct: false },
      { text: 'link', correct: true },
    ]
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<scripting>', correct: false },
      { text: '<js>', correct: false },
      { text: '<Javascript>', correct: false },
      { text: '<script>', correct: true },
    ]
  },
  {
    question: 'What symbol goes at the end of your lines of code to indicate that this line of code is finished?',
    answers: [
      { text: '!', correct: false },
      { text: ';', correct: true },
      { text: '$', correct: false },
      { text: '?', correct: false },
    ]
  },
  {
    question: 'Where is the correct place to insert a JavaScript in HTML?',
    answers: [
      { text: 'Both the <head> section and the <body>', correct: false },
      { text: 'The <head> section', correct: false },
      { text: 'The <body> section', correct: true },
      { text: 'Neither', correct: false },
    ]
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'alert("Hello World");', correct: true },
      { text: 'msg("Hello World");', correct: false },
      { text: 'prompt("Hello World");', correct: false },
      { text: 'confirm("Hello World");', correct: false },
    ]
  },
  {
    question: 'How do you create a function in Javascript?',
    answers: [
      { text: 'function = myfunction()', correct: false },
      { text: 'function myfunction()', correct: true },
      { text: 'function.myfunction()', correct: false },
      { text: 'function:myfunction()', correct: false },
    ]
  },
  {
    question: 'Which would you have to add to a button in order to have Javascript execute something when the user clicks the button?',
    answers: [
      { text: 'setAttribute', correct: false },
      { text: 'setInterval', correct: false },
      { text: 'addEventListener', correct: true },
      { text: 'getElementByClass', correct: false },
    ]
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    answers: [
      { text: '*', correct: false },
      { text: '!', correct: false },
      { text: 'x', correct: false },
      { text: '=', correct: true },
    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'How to Make Language', correct: false },
      { text: 'HyperText Markup Language', correct: true },
      { text: 'HyperLink and Text Max Language', correct: false },
      { text: 'Hyperflex and Turn Maker Language', correct: false },
    ]
  },
  {
    question: 'Choose the HTML element for the largest heading:',
    answers: [
      { text: '<h6>', correct: false },
      { text: '<heading>', correct: false },
      { text: '<h1>', correct: true },
      { text: '<head>', correct: false },
    ]
  },
  {
    question: 'Choose the correct HTML element to define important text:',
    answers: [
      { text: '<strong>', correct: false },
      { text: '<important>', correct: true },
      { text: '<i>', correct: false },
      { text: '<br>', correct: false },
    ]
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    answers: [
      { text: '<style>', correct: true },
      { text: '<css>', correct: false },
      { text: '<script>', correct: false },
      { text: '<head>', correct: false },
    ]
  },
  {
    question: 'How do you select an element with id "demo"?',
    answers: [
      { text: 'demo', correct: false },
      { text: '*demo', correct: false },
      { text: '#demo', correct: false },
      { text: '.demo', correct: true },
    ]
  },
  {
    question: 'Which of these is not a position property?',
    answers: [
      { text: 'fixed', correct: false },
      { text: 'absolute', correct: false },
      { text: 'static', correct: true },
      { text: 'relative', correct: false },
    ]
  },
]

var questionContainer = document.querySelector("#container");

const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const tryAgainButton = document.getElementById('try-again')


const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtnEl = document.getElementById('answer-buttons')

let rearrangeQuestions, questionIndex

var correct = document.getElementById('correct')
var numcorrect = 0
var incorrect = document.getElementById('incorrect')
var numincorrect = 0


var highScoreName =localStorage.getItem("finalscore");
  if(!highScoreName) {
    highScoreName = [];
    
  }
  else{
    highScoreName = JSON.parse(highScoreName);
  }
  console.log(highScoreName[0])
startButton.addEventListener('click', firstStart)
tryAgainButton.addEventListener('click', startGame)

function firstStart() {
  setInterval(updateCountdown, 1000);
  startGame();
}

function startGame() {
  startButton.classList.add("hide")
  tryAgainButton.classList.add("hide")
  rearrangeQuestions = questionArr.sort(() => Math.random() - .5)
  questionIndex = 0
  questionContainerEl.setAttribute("class", "")
  numcorrect = 0
  numincorrect = 0
  time = 75

  setNextQ()
};

function setNextQ() {
  resetState()
  displayQuestion(rearrangeQuestions[questionIndex])
  questionIndex++;
};


function displayQuestion(question) {
  questionEl.innerHTML = question.question
  console.log(questionEl.innerHTML)
  question.answers.forEach(answers => {
    const button = document.createElement('button')
    button.innerText = answers.text
    button.classList.add('button')
    if (answers.correct) {

    }
    button.addEventListener('click', selectAnswer)
    answerBtnEl.appendChild(button)
  });
}

function resetState() {
  nextButton.setAttribute("class", "hide")
  while (answerBtnEl.firstChild)
    answerBtnEl.removeChild(answerBtnEl.firstChild)
  displayQuestion
}

function selectAnswer(e) {
  const selectButton = e.target
  const answerSelected = selectButton.textContent
  console.log(selectButton.textContent)
  var correct = false
  questionArr[questionIndex - 1].answers.forEach(answer => {
    if (answer.text === answerSelected) {
      correct = answer.correct
      if (correct) {
        questionEl.textContent = "Correct!"
        numcorrect++
      }
      else {
        questionEl.textContent = "Wrong!"
        numincorrect++
      }
    }

  })
  while (answerBtnEl.firstChild)
    answerBtnEl.removeChild(answerBtnEl.firstChild)

  nextButton.setAttribute("class", "")
  //setStatusClass()
};
nextButton.addEventListener('click', setNextQ)



const startingSeconds = 75;
let time = startingSeconds;
const countdownEl = document.getElementById('countdown');


function updateCountdown() {
  const seconds = Math.floor(time);

  time = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = seconds + " seconds";
  time--;

  if (time === 0) {
    var list = []
    var initials = prompt("Please put your initials")
    highScoreName.push({initials: initials, score: numcorrect});
    questionEl.setAttribute("class", "")
    questionEl.textContent = "Times Up!"
      while (answerBtnEl.firstChild)
      answerBtnEl.removeChild(answerBtnEl.firstChild)
    highScoreName.forEach(score =>{list.push("<li> initials: " + score.initials + " Score: " + score.score + "</li>")});
    answerBtnEl.innerHTML = "<ul>" + list + "</ul>"
    localStorage.setItem("finalscore", JSON.stringify(highScoreName))
    setInterval(updateCountdown, 0);

  }


}




updateCountdown();






