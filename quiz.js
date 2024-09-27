document.addEventListener('DOMContentLoaded', () => {
    function displayQuiz() {
        const questions = [
            {
                question: "When faced with confrontations, I tend to:",
                choices: ["Take it head-on", "Avoid it"],
                weights: [
                    { challengerScore: 1, peacemakerScore: 0 },
                    { challengerScore: 0, peacemakerScore: 1 }
                ]
            },
            {
                question: "In social situations, I'm usually:",
                choices: ["Diplomatic, charming, and ambitious", "Direct, formal, and idealistic"],
                weights: [
                    { achieverScore: 1, reformerScore: 0 },
                    { achieverScore: 0, reformerScore: 1 }
                ]
            },
            {
                question: "I prefer plans that are:",
                choices: ["Detailed and focused", "Spontaneous and fun"],
                weights: [
                    { investigatorScore: 1, enthusiastScore: 0 },
                    { investigatorScore: 0, enthusiastScore: 1 }
                ]
            },
            {
                question: "With new people, I'm:",
                choices: ["Welcoming and friendly", "Private and reserved"],
                weights: [
                    { helperScore: 1, individualistScore: 0 },
                    { helperScore: 0, individualistScore: 1 }
                ]
            },
            {
                question: "When something annoys me, I:",
                choices: ["Get irritated", "Stay calm and ignore it"],
                weights: [
                    { loyalistScore: 1, peacemakerScore: 0 },
                    { loyalistScore: 0, peacemakerScore: 1 }
                ]
            },
            {
                question: "I am more of a:",
                choices: ["Street-smart survivor", "Idealist thinker"],
                weights: [
                    { challengerScore: 1, reformerScore: 0 },
                    { challengerScore: 0, reformerScore: 1 }
                ]
            },
            {
                question: "In relationships, I tend to:",
                choices: ["Show affection openly and easily", "Keep a bit of distance"],
                weights: [
                    { helperScore: 1, investigatorScore: 0 },
                    { helperScore: 0, investigatorScore: 1 }
                ]
            },
            {
                question: "When trying new things, I:",
                choices: ["Think about how useful it will be", "Wonder if it will be fun"],
                weights: [
                    { achieverScore: 1, enthusiastScore: 0 },
                    { achieverScore: 0, enthusiastScore: 1 }
                ]
            },
            {
                question: "People depend on me for:",
                choices: ["My insight and knowledge", "My strength and decisiveness"],
                weights: [
                    { investigatorScore: 1, challengerScore: 0 },
                    { investigatorScore: 0, challengerScore: 1 }
                ]
            },
            {
                question: "People see me as:",
                choices: ["Often unsure of myself", "Often sure of myself"],
                weights: [
                    { loyalistScore: 1, reformerScore: 0 },
                    { loyalistScore: 0, reformerScore: 1 }
                ]
            },
            {
                question: "When I have to speak up, I:",
                choices: ["Find it hard to speak for myself", "Am usually outspoken and dare to say what others don't"],
                weights: [
                    { individualistScore: 1, enthusiastScore: 0 },
                    { individualistScore: 0, enthusiastScore: 1 }
                ]
            },
            {
                question: "In stressful situations, I tend to:",
                choices: ["Hesitate and procrastinate", "Act boldly"],
                weights: [
                    { loyalistScore: 1, challengerScore: 0 },
                    { loyalistScore: 0, challengerScore: 1 }
                ]
            },
            {
                question: "When it comes to commitments, I:",
                choices: ["Don't get too involved with others", "Eager to have others depend on me"],
                weights: [
                    { peacemakerScore: 1, helperScore: 0 },
                    { peacemakerScore: 0, helperScore: 1 }
                ]
            },
            {
                question: "When working in emotional situations, I:",
                choices: ["Set my feelings aside to get the work done", "Need to deal with my feelings first"],
                weights: [
                    { achieverScore: 1, individualistScore: 0 },
                    { achieverScore: 0, individualistScore: 1 }
                ]
            }
        ];

        let reformerScore = 0, helperScore = 0, achieverScore = 0, individualistScore = 0;
        let investigatorScore = 0, loyalistScore = 0, enthusiastScore = 0, challengerScore = 0, peacemakerScore = 0;
        let currentQuestionIndex = 0;

        function displayCurrentQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            const questionElement = document.getElementById('question');
            const choiceContainers = document.getElementById('choices');
            choiceContainers.innerHTML = ''; // Clear previous choices

            questionElement.textContent = currentQuestion.question;
            currentQuestion.choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.textContent = choice;
                button.classList.add('choices');
                button.addEventListener('click', () => handleChoiceClick(index));
                choiceContainers.appendChild(button);
            });
        }

        function handleChoiceClick(choiceIndex) {
            const currentQuestion = questions[currentQuestionIndex];
            const selectedChoiceWeight = currentQuestion.weights[choiceIndex];

            reformerScore += selectedChoiceWeight.reformerScore || 0;
            helperScore += selectedChoiceWeight.helperScore || 0;
            achieverScore += selectedChoiceWeight.achieverScore || 0;
            individualistScore += selectedChoiceWeight.individualistScore || 0;
            investigatorScore += selectedChoiceWeight.investigatorScore || 0;
            loyalistScore += selectedChoiceWeight.loyalistScore || 0;
            enthusiastScore += selectedChoiceWeight.enthusiastScore || 0;
            challengerScore += selectedChoiceWeight.challengerScore || 0;
            peacemakerScore += selectedChoiceWeight.peacemakerScore || 0;

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateEnneagramType();
            }
        }

        function calculateEnneagramType() {
            const results = [
                { type: "Reformer", score: reformerScore },
                { type: "Helper", score: helperScore },
                { type: "Achiever", score: achieverScore },
                { type: "Individualist", score: individualistScore },
                { type: "Investigator", score: investigatorScore },
                { type: "Loyalist", score: loyalistScore },
                { type: "Enthusiast", score: enthusiastScore },
                { type: "Challenger", score: challengerScore },
                { type: "Peacemaker", score: peacemakerScore }
            ];

            results.sort((a, b) => b.score - a.score);

            const topType = results[0].type;
            const resultElement = document.getElementById('result');
            resultElement.textContent = `Your dominant Enneagram type is: ${topType}`;
        }

        displayCurrentQuestion();
    }

    displayQuiz();
});
