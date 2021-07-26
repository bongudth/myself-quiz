const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  },
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application Programming Interface',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'd'
  }
]

const question = document.getElementById('question')
const answer_a = document.getElementById('answer_a')
const answer_b = document.getElementById('answer_b')
const answer_c = document.getElementById('answer_c')
const answer_d = document.getElementById('answer_d')
const answers = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const submit = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deslectAnswers();

  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  answer_a.innerText = currentQuizData.a;
  answer_b.innerText = currentQuizData.b;
  answer_c.innerText = currentQuizData.c;
  answer_d.innerText = currentQuizData.d;
}

function getSelected() {
  let currentAnswer = undefined;

  answers.forEach(answer => {
    if (answer.checked) {
      currentAnswer = answer.id;
    }
  })

  return currentAnswer;
}

function deslectAnswers() {
  answers.forEach(answer => {
    answer.checked = false;
  })
}

submit.addEventListener('click', () => {
  const currentAnswer = getSelected();

  if (currentAnswer) {
    if (currentAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onClick="location.reload()">Reload</button>`
    }
  }
})