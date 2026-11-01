
document.addEventListener("DOMContentLoaded", () => {

    // 1. ДОРОСЛЕ ЄВРОБАЧЕННЯ — ПРОСТИЙ РІВЕНЬ

    const adultEasyQuestions = [
        {
            question: "Хто переміг на Євробаченні 2022 року?",
            answers: ["Sam Ryder", "Kalush Orchestra", "Måneskin", "Loreen"],
            correct: 1
        },
        {
            question: "Яка країна перемогла на Євробаченні 2023 року?",
            answers: ["Україна", "Італія", "Швеція", "Фінляндія"],
            correct: 2
        },
        {
            question: "Як називалася пісня Джамали на Євробаченні 2016?",
            answers: ["Stefania", "1944", "Shum", "Wild Dances"],
            correct: 1
        },
        {
            question: "Хто представляв Україну на Євробаченні 2024?",
            answers: ["Go_A", "Tina Karol", "Jerry Heil та alyona alyona", "Kalush Orchestra"],
            correct: 2
        },
        {
            question: "Яка країна перемогла на Євробаченні 2024 року?",
            answers: ["Хорватія", "Швейцарія", "Україна", "Франція"],
            correct: 1
        },
        {
            question: "Хто переміг на Євробаченні 2021 року?",
            answers: ["Франція", "Швейцарія", "Італія", "Ісландія"],
            correct: 2
        },
        {
            question: "Який гурт представляв Україну з піснею Stefania?",
            answers: ["Go_A", "The Hardkiss", "Kalush Orchestra", "TVORCHI"],
            correct: 2
        },
        {
            question: "Хто переміг на Євробаченні 2019 року?",
            answers: ["Дункан Лоуренс", "Нетта", "Лорін", "Сальвадор Собрал"],
            correct: 0
        },
        {
            question: "Яка країна перемогла на Євробаченні 2004 року?",
            answers: ["Греція", "Україна", "Туреччина", "Сербія"],
            correct: 1
        },
        {
            question: "Хто приніс Україні першу перемогу на Євробаченні?",
            answers: ["Джамала", "Тіна Кароль", "Руслана", "Вєрка Сердючка"],
            correct: 2
        }
    ];


    // 2. ДОРОСЛЕ ЄВРОБАЧЕННЯ — СКЛАДНИЙ РІВЕНЬ

    const adultHardQuestions = [
        {
            question: "У якому році відбулося перше Євробачення?",
            answers: ["1950", "1956", "1960", "1965"],
            correct: 1
        },
        {
            question: "У якому місті відбулося перше Євробачення?",
            answers: ["Лондон", "Париж", "Лугано", "Рим"],
            correct: 2
        },
        {
            question: "Який гурт переміг на Євробаченні 1974 року?",
            answers: ["ABBA", "Queen", "Boney M", "The Beatles"],
            correct: 0
        },
        {
            question: "Яка країна перемогла на Євробаченні 2006 року?",
            answers: ["Греція", "Фінляндія", "Росія", "Україна"],
            correct: 1
        },
        {
            question: "Хто переміг на Євробаченні 2017 року?",
            answers: ["Лорін", "Нетта", "Сальвадор Собрал", "Дункан Лоуренс"],
            correct: 2
        },
        {
            question: "Яка країна перемогла на Євробаченні 2014 року?",
            answers: ["Австрія", "Швеція", "Нідерланди", "Італія"],
            correct: 0
        },
        {
            question: "Хто представляв Швейцарію на Євробаченні 1988 року?",
            answers: ["Селін Діон", "Лорін", "Руслана", "Джамала"],
            correct: 0
        },
        {
            question: "Яка країна перемогла на Євробаченні 2010 року?",
            answers: ["Німеччина", "Туреччина", "Іспанія", "Франція"],
            correct: 0
        },
        {
            question: "Хто переміг на Євробаченні 2007 року?",
            answers: ["Сербія", "Україна", "Росія", "Греція"],
            correct: 0
        },
        {
            question: "Яка країна приймала Євробачення 2017 року?",
            answers: ["Польща", "Україна", "Швеція", "Португалія"],
            correct: 1
        }
    ];


    // 3. ДИТЯЧЕ ЄВРОБАЧЕННЯ — ПРОСТИЙ РІВЕНЬ

    const juniorEasyQuestions = [
        {
            question: "У якому році відбулося перше Дитяче Євробачення?",
            answers: ["2000", "2003", "2005", "2010"],
            correct: 1
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2023 року?",
            answers: ["Україна", "Іспанія", "Франція", "Польща"],
            correct: 2
        },
        {
            question: "Хто представляв Україну на Дитячому Євробаченні 2023 року?",
            answers: ["Анастасія Димид", "Софія Нерсесян", "Даріна Красновецька", "Злата Дзюнька"],
            correct: 0
        },
        {
            question: "Яка країна приймала Дитяче Євробачення 2024 року?",
            answers: ["Франція", "Іспанія", "Польща", "Італія"],
            correct: 1
        },
        {
            question: "Хто переміг на Дитячому Євробаченні 2022 року?",
            answers: ["Україна", "Велика Британія", "Франція", "Вірменія"],
            correct: 2
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2021 року?",
            answers: ["Вірменія", "Франція", "Польща", "Грузія"],
            correct: 1
        },
        {
            question: "Яке місце посіла Україна на Дитячому Євробаченні 2023 року?",
            answers: ["Перше", "Друге", "П'яте", "Десяте"],
            correct: 2
        },
        {
            question: "Скільки країн брали участь у першому Дитячому Євробаченні?",
            answers: ["8", "12", "16", "20"],
            correct: 2
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2024 року?",
            answers: ["Україна", "Франція", "Грузія", "Іспанія"],
            correct: 2
        },
        {
            question: "У якому році Україна вперше перемогла на Дитячому Євробаченні?",
            answers: ["2006", "2012", "2013", "2015"],
            correct: 0
        }
    ];


    // 4. ДИТЯЧЕ ЄВРОБАЧЕННЯ — СКЛАДНИЙ РІВЕНЬ

    const juniorHardQuestions = [
        {
            question: "Яка країна перемогла на першому Дитячому Євробаченні?",
            answers: ["Україна", "Хорватія", "Іспанія", "Польща"],
            correct: 1
        },
        {
            question: "Хто представляв Україну на Дитячому Євробаченні 2006 року?",
            answers: ["Вікторія Петрик", "Анастасія Петрик", "Катя Чілі", "Ілларія"],
            correct: 1
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2013 року?",
            answers: ["Україна", "Мальта", "Грузія", "Італія"],
            correct: 1
        },
        {
            question: "Хто переміг на Дитячому Євробаченні 2018 року?",
            answers: ["Польща", "Франція", "Україна", "Вірменія"],
            correct: 0
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2019 року?",
            answers: ["Іспанія", "Польща", "Україна", "Казахстан"],
            correct: 1
        },
        {
            question: "Хто переміг на Дитячому Євробаченні 2020 року?",
            answers: ["Франція", "Польща", "Вірменія", "Грузія"],
            correct: 0
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2016 року?",
            answers: ["Росія", "Грузія", "Україна", "Мальта"],
            correct: 1
        },
        {
            question: "Хто представляв Україну на Дитячому Євробаченні 2024 року?",
            answers: ["Анастасія Димид", "Артем Котенко", "Злата Дзюнька", "Софія Нерсесян"],
            correct: 1
        },
        {
            question: "Яка країна перемогла на Дитячому Євробаченні 2017 року?",
            answers: ["Грузія", "Росія", "Італія", "Польща"],
            correct: 1
        },
        {
            question: "Хто переміг на Дитячому Євробаченні 2015 року?",
            answers: ["Мальта", "Україна", "Словенія", "Вірменія"],
            correct: 0
        }
    ];


    // 5. ЕЛЕМЕНТИ СТОРІНКИ

    const startScreen = document.querySelector("#start-screen");
    const quizScreen = document.querySelector("#quiz-screen");
    const resultScreen = document.querySelector("#result-screen");

    const startBtn = document.querySelector("#start-btn");
    const restartBtn = document.querySelector("#restart-btn");

    const contestType = document.querySelector("#contest-type");
    const difficulty = document.querySelector("#difficulty");

    const questionText = document.querySelector("#question-text");
    const answersContainer = document.querySelector("#answers-container");
    const questionCounter = document.querySelector("#question-counter");
    const timer = document.querySelector("#timer");
    const scoreDisplay = document.querySelector("#score-display");
    const resultText = document.querySelector("#result-text");
    const progressFill = document.querySelector("#progress-fill");
    const feedback = document.querySelector("#feedback");


    // 6. ЗМІННІ

    let questions = [];
    let questionIndex = 0;
    let score = 0;
    let timeLeft = 15;
    let interval;
    let answerLocked = false;
    let nextTimeout;


    // 7. ПОЧАТОК ГРИ

    function startGame() {
        clearInterval(interval);
        clearTimeout(nextTimeout);

        if (contestType.value === "adult") {
            if (difficulty.value === "easy") {
                questions = adultEasyQuestions;
            } else {
                questions = adultHardQuestions;
            }
        } else {
            if (difficulty.value === "easy") {
                questions = juniorEasyQuestions;
            } else {
                questions = juniorHardQuestions;
            }
        }

        questionIndex = 0;
        score = 0;
        answerLocked = false;

        scoreDisplay.textContent = "Бали: 0";
        resultText.textContent = "";

        startScreen.classList.remove("active");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("active");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("active");

        showQuestion();
    }


    // 8. ПОКАЗ ЗАПИТАННЯ

    function showQuestion() {
        clearInterval(interval);

        const question = questions[questionIndex];

        answerLocked = false;
        answersContainer.innerHTML = "";
        feedback.textContent = "";

        questionText.textContent = question.question;

        questionCounter.textContent =
            "Питання " + (questionIndex + 1) + " із " + questions.length;

        progressFill.style.width =
            ((questionIndex + 1) / questions.length * 100) + "%";

        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement("button");

            button.textContent = question.answers[i];
            button.classList.add("answer-btn");
            button.type = "button";

            button.addEventListener("click", function () {
                checkAnswer(i, button);
            });

            answersContainer.appendChild(button);
        }

        startTimer();
    }


    // 9. ПЕРЕВІРКА ВІДПОВІДІ

    function checkAnswer(answerIndex, clickedButton) {
        if (answerLocked) {
            return;
        }

        answerLocked = true;
        clearInterval(interval);

        const buttons = answersContainer.querySelectorAll("button");
        const correctAnswer = questions[questionIndex].correct;

        buttons.forEach(button => {
            button.disabled = true;
        });

        if (answerIndex === correctAnswer) {
            score++;

            clickedButton.classList.add("correct");
            feedback.textContent = "Правильно! 🎉";
            feedback.style.color = "#54e6a0";
        } else {
            clickedButton.classList.add("wrong");
            buttons[correctAnswer].classList.add("correct");

            feedback.textContent = "Неправильно! 😊";
            feedback.style.color = "#ff8da1";
        }

        scoreDisplay.textContent = "Бали: " + score;

        nextTimeout = setTimeout(nextQuestion, 1200);
    }


    // 10. НАСТУПНЕ ЗАПИТАННЯ

    function nextQuestion() {
        questionIndex++;

        if (questionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }


    // 11. РЕЗУЛЬТАТИ

    function showResult() {
        clearInterval(interval);

        quizScreen.classList.remove("active");
        quizScreen.classList.add("hide");

        resultScreen.classList.remove("hide");
        resultScreen.classList.add("active");

        const accuracy = Math.round(
            (score / questions.length) * 100
        );

        resultText.textContent =
            "Твій результат: " + score + " з " +
            questions.length + " (" + accuracy + "%)";
    }


    // 12. ТАЙМЕР

    function startTimer() {
        clearInterval(interval);

        timeLeft = 15;
        timer.textContent = "⏱ " + timeLeft + " с";

        interval = setInterval(() => {
            timeLeft--;

            timer.textContent = "⏱ " + timeLeft + " с";

            if (timeLeft <= 0) {
                clearInterval(interval);

                if (!answerLocked) {
                    answerLocked = true;

                    const buttons = answersContainer.querySelectorAll("button");

                    buttons.forEach(button => {
                        button.disabled = true;
                    });

                    const correctAnswer = questions[questionIndex].correct;
                    buttons[correctAnswer].classList.add("correct");

                    feedback.textContent = "Час вийшов! ⏰";
                    feedback.style.color = "#ffd166";

                    nextTimeout = setTimeout(nextQuestion, 1200);
                }
            }
        }, 1000);
    }


    // 13. ПОВЕРНЕННЯ НА ГОЛОВНИЙ ЕКРАН

    function returnToStart() {
        clearInterval(interval);
        clearTimeout(nextTimeout);

        resultScreen.classList.remove("active");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("active");
        quizScreen.classList.add("hide");

        startScreen.classList.remove("hide");
        startScreen.classList.add("active");

        questionIndex = 0;
        score = 0;
        answerLocked = false;

        progressFill.style.width = "0%";
        scoreDisplay.textContent = "Бали: 0";
        timer.textContent = "⏱ 15 с";
        feedback.textContent = "";
        answersContainer.innerHTML = "";
    }


    // 14. КНОПКИ

    startBtn.addEventListener("click", startGame);
    restartBtn.addEventListener("click", returnToStart);

});
