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

        // Variables for personality scores
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

            // Update scores based on the selected choice
            reformerScore += selectedChoiceWeight.reformerScore || 0;
            helperScore += selectedChoiceWeight.helperScore || 0;
            achieverScore += selectedChoiceWeight.achieverScore || 0;
            individualistScore += selectedChoiceWeight.individualistScore || 0;
            investigatorScore += selectedChoiceWeight.investigatorScore || 0;
            loyalistScore += selectedChoiceWeight.loyalistScore || 0;
            enthusiastScore += selectedChoiceWeight.enthusiastScore || 0;
            challengerScore += selectedChoiceWeight.challengerScore || 0;
            peacemakerScore += selectedChoiceWeight.peacemakerScore || 0;

            // Move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateEnneagramType();
            }
        }

        // Function to calculate and display the Enneagram type and the most compatible types
        function calculateEnneagramType() {
            const results = [
                { type: "Reformer", score: reformerScore, compatibleWith: ["Enthusiast", "Individualist"], compatibleScores: [enthusiastScore, individualistScore] },
                { type: "Helper", score: helperScore, compatibleWith: ["Individualist", "Challenger"], compatibleScores: [individualistScore, challengerScore] },
                { type: "Achiever", score: achieverScore, compatibleWith: ["Loyalist", "Peacemaker"], compatibleScores: [loyalistScore, peacemakerScore] },
                { type: "Individualist", score: individualistScore, compatibleWith: ["Reformer", "Helper"], compatibleScores: [reformerScore, helperScore] },
                { type: "Investigator", score: investigatorScore, compatibleWith: ["Enthusiast", "Challenger"], compatibleScores: [enthusiastScore, challengerScore] },
                { type: "Loyalist", score: loyalistScore, compatibleWith: ["Peacemaker", "Achiever"], compatibleScores: [peacemakerScore, achieverScore] },
                { type: "Enthusiast", score: enthusiastScore, compatibleWith: ["Reformer", "Investigator"], compatibleScores: [reformerScore, investigatorScore] },
                { type: "Challenger", score: challengerScore, compatibleWith: ["Investigator", "Helper"], compatibleScores: [investigatorScore, helperScore] },
                { type: "Peacemaker", score: peacemakerScore, compatibleWith: ["Loyalist", "Achiever"], compatibleScores: [loyalistScore, achieverScore] }
            ];

            // Sort results by highest score to find the dominant type
            results.sort((a, b) => b.score - a.score);

            const topType = results[0].type;
            const compatibleTypes = results[0].compatibleWith;
            const compatibleScores = results[0].compatibleScores;

            // Sort compatible types based on their scores to determine the most compatible
            const sortedCompatible = compatibleTypes
                .map((type, index) => ({ type, score: compatibleScores[index] }))
                .sort((a, b) => b.score - a.score);

            const mostCompatible = sortedCompatible[0].type;
            const secondChoice = sortedCompatible[1].type;

            const resultElement = document.getElementById('result');
            resultElement.textContent = `Your dominant Enneagram type is: ${topType}. You are most compatible with: ${mostCompatible}. Second choice: ${secondChoice}.`;
        }

        // Display the first question when the quiz starts
        displayCurrentQuestion();
    }

    // Run the quiz
    displayQuiz();
});
