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
let userAnswers = [];

function loadQuestion() {
    const questionText = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    optionsDiv.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("quiz-option");
        btn.onclick = () => selectOption(option);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption;
    document.querySelectorAll(".quiz-option").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert("Please select an option before proceeding!");
        return;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById("result");
    const quizDiv = document.getElementById("quiz");
    const resultText = document.getElementById("result-text");

    quizDiv.classList.add("hidden");

    const favoriteAnswer = userAnswers.filter(answer => answer === "Reading books").length > 1 ? "Geronimo Stilton" : "Thea Stilton";

    resultText.innerText = `You are most like ${favoriteAnswer}!`;
    resultDiv.classList.remove("hidden");
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

window.onload = function() {
    loadQuestion();
};
