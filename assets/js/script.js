const questions = [
    { 
      question: "1what is the sign for this a image A?",
      answers: [
        {text: "A", correct: true},
        {text: "I", correct: false},
        {text: "T", correct: false},
        {text: "O", correct: false},
        ]
    },

    {
        question: "2what is the sign for this a image R?",
        answers: [
          {text: "Z", correct: false},
          {text: "G", correct: false},
          {text: "R", correct: true},
          {text: "H", correct: false},
          ]
    },

    {
        question: "3what is the sign for this a image m?",
        answers: [
          {text: "N", correct: false},
          {text: "M", correct: true},
          {text: "P", correct: false},
          {text: "I", correct: false},
          ]
    },

    {
        question: "4what is the sign for this a image O?",
        answers: [
          {text: "O", correct: true},
          {text: "G", correct: false},
          {text: "S", correct: false},
          {text: "C", correct: false},
          ]
    },

    {
        question: "5what is the sign for this a image S?",
        answers: [
          {text: "B", correct: false},
          {text: "P", correct: false},
          {text: "K", correct: false},
          {text: "S", correct: true},
          ]
    },

    {
        question: "6what is the sign for this a image K?",
        answers: [
          {text: "Q", correct: false},
          {text: "K", correct: true},
          {text: "O", correct: false},
          {text: "T", correct: false},
          ]
    },

    {
        question: "7what is the sign for this a image T?",
        answers: [
          {text: "T", correct: true},
          {text: "H", correct: false},
          {text: "A", correct: false},
          {text: "I", correct: false},
          ]
    },

    {
        question: "8what is the sign for this a image Y?",
        answers: [
          {text: "B", correct: false},
          {text: "L", correct: false},
          {text: "Y", correct: true},
          {text: "X", correct: false},
          ]
    },

    {
        question: "9what is the sign for this a image n?",
        answers: [
          {text: "M", correct: false},
          {text: "N", correct: true},
          {text: "P", correct: false},
          {text: "A", correct: false},
          ]
    },

    {
        question: "10what is the sign for this a image I?",
        answers: [
          {text: "F", correct: false},
          {text: "G", correct: false},
          {text: "K", correct: false},
          {text: "I", correct: true},
          ]
    }
    ];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

