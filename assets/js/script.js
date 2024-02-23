const questions = [
    { 
      question: "what is the sign for this image?",
      answers: [
        {text: "A", correct: true},
        {text: "I", correct: false},
        {text: "T", correct: false},
        {text: "O", correct: false},
        ]
    },

    {
        question: "what is the sign for this a image R?",
        answers: [
          {text: "Z", correct: false},
          {text: "G", correct: false},
          {text: "R", correct: true},
          {text: "H", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image m?",
        answers: [
          {text: "N", correct: false},
          {text: "M", correct: true},
          {text: "P", correct: false},
          {text: "I", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image O?",
        answers: [
          {text: "O", correct: true},
          {text: "G", correct: false},
          {text: "S", correct: false},
          {text: "C", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image S?",
        answers: [
          {text: "B", correct: false},
          {text: "P", correct: false},
          {text: "K", correct: false},
          {text: "S", correct: true},
          ]
    },

    {
        question: "what is the sign for this a image K?",
        answers: [
          {text: "Q", correct: false},
          {text: "K", correct: true},
          {text: "O", correct: false},
          {text: "T", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image T?",
        answers: [
          {text: "T", correct: true},
          {text: "H", correct: false},
          {text: "A", correct: false},
          {text: "I", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image Y?",
        answers: [
          {text: "B", correct: false},
          {text: "L", correct: false},
          {text: "Y", correct: true},
          {text: "X", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image n?",
        answers: [
          {text: "M", correct: false},
          {text: "N", correct: true},
          {text: "P", correct: false},
          {text: "A", correct: false},
          ]
    },

    {
        question: "what is the sign for this a image I?",
        answers: [
          {text: "F", correct: false},
          {text: "G", correct: false},
          {text: "K", correct: false},
          {text: "I", correct: true},
          ]
    }
    ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn")
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

function selectAnswer(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
      selectBtn.classList.add("correct");
      score++;
}else{
      selectBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
  if(button.dataset.correct === "true"){
      button.classList.add("correct");
  }
  button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
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