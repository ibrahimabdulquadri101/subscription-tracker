document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const category2 = params.get('category');
    const difficulty2 = params.get('difficulty');
    console.log(category2)
    console.log(difficulty2)
    function requestUrl(url){
        fetch(url).then(res => res.json())
        .then(function(data){
            console.log(data)
            console.log(data.response_code)
            console.log(data.results[0])
             currentIndex = 0;
             let userAnswers = []
             function displayQuestion(i){
                const questionData = data.results[i].question
                const correctAnswer = data.results[i].correct_answer
                const wrongAnswer = data.results[i].incorrect_answers
                const allAnswers = [correctAnswer,...wrongAnswer]
                 allAnswers.sort(() => Math.random() - 0.5);
                 const quizQuestion = document.querySelector("#quizquestion")
                 questionHTML = `
                  <div>
                  <p>${i+1}.${questionData}</p>
                  <ul>
                                ${allAnswers.map(answer => `
                                    <input type="radio" id="${answer}" name="quiz_option" value="${answer}">
                                    <label for="${answer}">${answer}</label><br>
                                `).join('')}
                            </ul>
                  </div>                 
                  `;
                  quizQuestion.innerHTML = questionHTML;
             }
             displayQuestion(currentIndex)
             const next = document.querySelector("#next")
             next.addEventListener("click",function(){
                const selectedOption = document.querySelector('input[name="quiz_option"]:checked');
                    if (selectedOption) {
                        userAnswers[currentIndex] = selectedOption.value;
                    } else {
                        userAnswers[currentIndex] = null; // No answer selected
                    }
                currentIndex++
                if(currentIndex < data.results.length){
                    displayQuestion(currentIndex)
                }
                else{
                 const quizQuestion = document.querySelector("#quizquestion")
                    quizQuestion.innerHTML = `<p style="text-align:center">Quiz Completed</p>`
                    next.style.display = 'none';
                        const submitButton = document.getElementById('submit');
                        submitButton.style.display = 'block';
                }
             })
    const submit = document.querySelector("#submit")
    submit.addEventListener("click",function(){
        const selectedOption = document.querySelector("input[name=quiz_option]:checked")
        if(selectedOption){
            userAnswers[currentIndex] = selectedOption.value;
        }
        else{
            userAnswers[currentIndex] = null;
        }
        let correctAnswersCount = 0;
                    data.results.forEach((quizData, index) => {
                        if (userAnswers[index] === quizData.correct_answer) {
                            correctAnswersCount++;
                        }
                    });

                    // Redirect to the results page with the results
                    window.location.href = `results.html?correct=${correctAnswersCount}&total=${data.results.length}`;
    })
});

        }
    requestUrl(`https://opentdb.com/api.php?amount=10&category=${category2}&difficulty=${difficulty2}`)
        
    });