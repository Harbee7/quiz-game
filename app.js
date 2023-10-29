
    const questions = [
        {
            text: "What color is chlorophyII?",
            options: ["Red", "Green", "Yellow", "White"],
            correct: 1
        },
    
        {
            text: "What is the capital of France",
            options: ["London", "Paris", "Berlin", "Ghana"],
            correct: 1
        },
    
        {
            text: "What is the most populated country in the world?",
            options: ["China", "Italy", "Germany", "Nigeria"],
            correct: 0
        },
    
        {
            text: "Which is the second largest continent in the world?",
            options: ["Asia", "Africa", "France", "Ethopia"],
            correct: 1
        },
    
        {
            text: "Who is the president of Nigeria?",
            options: ["Bola Ahmed Tinubu", "Raji Fashola", "Ramsey Noah", "Ebele Jonathan"],
            correct: 0
        },
    
        {
            text: "What type of family consists of the father mother and children?",
            options: ["Extended", "Nuclear", "Advanced", "Intermediate"],
            correct: 1
        },
    
        {
            text: "The first PC virus was developed in?",
            options: ["1987", "1984", "1986", "1992"],
            correct: 2
        },
    
        {
            text: "Joystick allows the movement with?",
            options: ["360 degree angle", "90 degree angle", "180 degree angle", "320 degree angle"],
            correct: 0
        },
      ];

      let currentQuestion = 0;
    let score = 0;

    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");
    const scoreContainer = document.getElementById("score");

    function showQuestion() {
      if (currentQuestion < questions.length) {
        questionContainer.textContent = questions[currentQuestion].text;
        optionsContainer.innerHTML = "";

        for (let j = 0; j < questions[currentQuestion].options.length; j++) {
          const option = document.createElement("button");
          option.textContent = questions[currentQuestion].options[j];
          option.addEventListener("click", () => checkAnswer(j));
          optionsContainer.appendChild(option);
        }
      } else {
        endQuiz();
      }
    }

    function checkAnswer(selected) {
      if (selected === questions[currentQuestion].correct) {
        resultContainer.textContent = "Correct!!!";
        score++;
      } else {
        resultContainer.textContent = "Sorry, Wrong Answer!!";
      }
      currentQuestion++;
      scoreContainer.textContent = "Score: " + score;
      showQuestion();
    }

    function endQuiz() {
      questionContainer.textContent = "Quiz completed!";
      optionsContainer.innerHTML = "";
      resultContainer.textContent = "Your final score is: " + score;
      scoreContainer.style.display = "none";
    }

    showQuestion();






