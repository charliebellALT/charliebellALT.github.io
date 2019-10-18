//This is an IIFE - Immediately Invoked Function Expression, runs as soon as it is defined.

var global;

(function() {

    var variable = 10;

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

    var myQuestions = [];

    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "blue",
            b: "brown",
            c: "green"
        },
        correctAnswer: "a"
    }

    console.log(question1.question); //Get the question text
    console.log(question1.answers); //Get answers

    var question2 = {
        question: "What colour is Joe?",
        answers: {
            a: "who",
            b: "is",
            c: "joe?"
        },
        correctAnswer: "c"
    }

    var question3 = {
        question: "A man approaches you and says, ''Jojo!''",
        answers: {
            a: "Dio",
            b: "ma ma",
            c: "siwa"
        },
        correctAnswer: "b"
    }

    myQuestions.push(question1, question2, question3); // Add the question objects to array

    // SHOW QUIZ ON SCREEN

    // Function to build a quiz that sorts through question objects and generates HTML for each question
    function buildQuiz() {
        // We need to go through each of our question objects and use them to build out the HTML to show a question

        for (var i = 0; i < myQuestions.length; i++) {
            console.log(myQuestions[i]);
            // Create a display for the question text 
            
            // Creating a new div called questionDiv will hold info about 1 question
            var questionDiv = document.createElement("div");

            //This sets the Div's text to the relevant index's question component text
            questionDiv.innerText = myQuestions[i].question;

            //Create a div to hold answer choices
            var answersDiv = document.createElement("div");
            answersDiv.classList.add("answers");

            // For each property in the current question's answers object
                /* for-in loops go through the properties of an object */
            for (letter in myQuestions[i].answers) {
                var label = document.createElement("label"); 

                var input = document.createElement("input");
                
                input.type = "radio";
                input.name = "question" + i;
                input.value = letter; 

                label.appendChild(input);

                var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);

                //Add the text to the label
                label.appendChild(labelText);



                

                

                
                //Add the label to the answers div
                answersDiv.appendChild(label);
            }

            // Display the answer choices, take user input for selection

            // Once all the answers are added, add the answerDiv to use the questionDiv
            questionDiv.appendChild(answersDiv);

            // Add the questionDiv to the quizContainer
            quizContainer.appendChild(questionDiv);

        }
    }

    buildQuiz();

    // Function to show the results of the quiz
    function showResults() {
        // Get all the answer containers from our quiz 
        var answersContainers = quizContainer.querySelectorAll(".answers");

        // Var to keep track of how many are correct
        var numCorrect = 0;

        for (var i = 0; i < answersContainers.length; i++) {
            var answerContainer = answersContainers[i];

            var selector = `input[name=question${i}]:checked`;

            // Try to find the selected answer in the container and print out the value
            var userAnswer  = answerContainer.querySelector(selector).value;

            if (userAnswer === myQuestions[i].correctAnswer) {
                answerContainer.style.color = "green";
                numCorrect++;
            }
            else {
                answerContainer.style.color = "red";
            }

            //Add text to the results container
            resultsContainer.innerText = "You got " + numCorrect + " out of " + myQuestions.length;
            
        }

    }

    submit.addEventListener("click", showResults);


    // Function to reset the quiz
    function resetQuiz() {
        // Clear out what's in the results container
        resultsContainer.innerText = "";
        // Clear out the quiz container
        quizContainer.innerHTML = "";
        // Rebuild the quiz
        buildQuiz();
    }

    reset.addEventListener("click", resetQuiz); // Call resetQuiz() on click of "reset"

})();
