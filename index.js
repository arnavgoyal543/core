const quizQuestions = [
    {
        question: "What do you prefer doing on weekends?",
        options: ["Reading books", "Going on adventures", "Spending time with friends"],
        answer: "Reading books"
    },
    {
        question: "Which snack do you like the most?",
        options: ["Cheese", "Chocolate", "Nuts"],
        answer: "Cheese"
    },
    {
        question: "Which is your favorite color?",
        options: ["Yellow", "Green", "Blue"],
        answer: "Yellow"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quiz = document.getElementById("quiz");
    const questionText = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    optionsDiv.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("quiz-option");
        optionsDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "<h3>Quiz Completed!</h3>";
    }
}

window.onload = function() {
    loadQuestion();
};
