/* jshint esversion: 11 */

// Questions for the Quiz
const questions = [
    { 
      question: "what is the sign for this image?",
      answers: [
        {text: "A", correct: true},
        {text: "I", correct: false},
        {text: "T", correct: false},
        {text: "O", correct: false},
        ],
        image: "assets/images/isla.png",
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "Z", correct: false},
          {text: "G", correct: false},
          {text: "R", correct: true},
          {text: "H", correct: false},
          ],
          image: "assets/images/islr.png",
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "N", correct: false},
          {text: "M", correct: true},
          {text: "P", correct: false},
          {text: "I", correct: false},
          ],
          image: "assets/images/islm.png", 
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "O", correct: true},
          {text: "G", correct: false},
          {text: "S", correct: false},
          {text: "C", correct: false},
          ],
          image: "assets/images/islo.png",
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "B", correct: false},
          {text: "P", correct: false},
          {text: "K", correct: false},
          {text: "S", correct: true},
          ],
          image: "assets/images/isls.png", 
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "Q", correct: false},
          {text: "K", correct: true},
          {text: "O", correct: false},
          {text: "T", correct: false},
          ],
          image: "assets/images/islk.png", 
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "T", correct: true},
          {text: "H", correct: false},
          {text: "A", correct: false},
          {text: "I", correct: false},
          ],
          image: "assets/images/islt.png", 
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "B", correct: false},
          {text: "L", correct: false},
          {text: "Y", correct: true},
          {text: "X", correct: false},
          ],
          image: "assets/images/isly.png", 
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "M", correct: false},
          {text: "N", correct: true},
          {text: "P", correct: false},
          {text: "A", correct: false},
          ],
          image: "assets/images/isln.png", 
    },

    {
        question: "what is the sign for this image?",
        answers: [
          {text: "F", correct: false},
          {text: "G", correct: false},
          {text: "K", correct: false},
          {text: "I", correct: true},
          ],
          image: "assets/images/isli.png", 
    }
    ];

// links to hmtl
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timer = document.getElementById('timer');

let questionImg = document.getElementById("image");

// create variables 
let sec = 120;
let time = setTimeout(myTimer,1000);

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = currentQuestionIndex;

// Count down time 
function myTimer() {
 time = setInterval(function () {
    timer.innerHTML = sec + "seconds left";
    sec--;

    if (sec === -1) {
      clearInterval(time);
      alert("Game Over");

      window.location.href = 'index.html';
    }
  }, 1000);
}

// start the quiz & shuffle the questions 
function startQuiz (){
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Display question
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionImg.src = currentQuestion.image;
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });

}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Display if user click right or wrong
function selectAnswer(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
      selectBtn.classList.add("correct");
      score++;
      swal({
        title: "WELL DONE",
        icon: "success",
      });
}else{
      selectBtn.classList.add("incorrect");
      swal({
        title: "HARD LUCK",
        icon: "error",
      });
}
Array.from(answerButtons.children).forEach(button => {
  if(button.dataset.correct === "true"){
      button.classList.add("correct");
  }
  button.disabled = true;
  });
  nextButton.style.display = "block";
}

// show score when the quiz is complete
function showScore(){
  resetState();
  clearInterval(time);
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  questionImg.style.display = "none";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
  });

startQuiz();