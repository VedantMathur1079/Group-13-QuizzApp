const questions = [
    {
        question: "Which country won the 2022 FIFA World Cup?",
        answers: [
            { text: "France", correct: false },
            { text: "Argentina", correct: true },
            { text: "Brazil", correct: false },
            { text: "Croatia", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Sardar Patel", correct: false },
            { text: "Subhash Chandra Bose", correct: false }
        ]
    },
    {
        question: "Which is the largest continent on Earth?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "Asia", correct: true },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "Which singer is known as the 'King of Pop'?",
        answers: [
            { text: "Elvis Presley", correct: false },
            { text: "Michael Jackson", correct: true },
            { text: "Freddie Mercury", correct: false },
            { text: "Bruno Mars", correct: false }
        ]
    },
    {
        question: "In the movie 'Avengers: Endgame', who snaps their fingers to defeat Thanos?",
        answers: [
            { text: "Thor", correct: false },
            { text: "Captain America", correct: false },
            { text: "Iron Man", correct: true },
            { text: "Hulk", correct: false }
        ]
    },
    {
        question: "What is the best-selling video game of all time?",
        answers: [
            { text: "Minecraft", correct: true },
            { text: "GTA V", correct: false },
            { text: "Tetris", correct: false },
            { text: "Super Mario Bros", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "Which game features 'Master Chief' as the main protagonist?",
        answers: [
            { text: "Call of Duty", correct: false },
            { text: "Halo", correct: true },
            { text: "Destiny", correct: false },
            { text: "Doom", correct: false }
        ]
    },
    {
        question: "Which city is known as the 'Big Apple'?",
        answers: [
            { text: "London", correct: false },
            { text: "Los Angeles", correct: false },
            { text: "New York", correct: true },
            { text: "Paris", correct: false }
        ]
    }
];
let currentIdx = 0;
let score = 0;
let playerName = ""; // Variable to store name

function startQuiz() {
    playerName = document.getElementById("username").value;
    
    if (playerName === "") {
        alert("Please enter a name!");
        return;
    }

    // Hide setup, show quiz
    document.getElementById("setup-container").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    showQuestion();
}

function showQuestion() {
    let q = questions[currentIdx];
    document.getElementById("question").innerText = q.question;
    const btnContainer = document.getElementById("answer-buttons");
    btnContainer.innerHTML = ''; 

    q.answers.forEach((ans, idx) => {
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.onclick = () => selectAnswer(button, ans.correct, ans);
        button.setAttribute("data-correct", ans.correct);
        btnContainer.appendChild(button);
    });
}

function selectAnswer(button, isCorrect, answer) {
    // Disable all answer buttons
    const allButtons = document.querySelectorAll("#answer-buttons button");
    allButtons.forEach(btn => btn.disabled = true);

    // Mark selected button
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
        // Show correct answer
        allButtons.forEach(btn => {
            if (btn.getAttribute("data-correct") === "true") {
                btn.classList.add("correct");
            }
        });
    }

    document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentIdx++;
    if (currentIdx < questions.length) {
        document.getElementById("next-btn").style.display = "none";
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    
    // Personalized greeting
    document.getElementById("greeting-text").innerText = `Great job, ${playerName}!`;
    document.getElementById("score-display").innerText = `You scored ${score} out of ${questions.length}!`;
}