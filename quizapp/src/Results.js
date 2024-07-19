import{React} from "react"

const Results = ({data,i}) => {
    const questionData = data.results[i].question
    const correctAnswer = data.results[i].correct_answer
    const wrongAnswer = data.results[i].incorrect_answers
    const allAnswers = [correctAnswer,...wrongAnswer]
    allAnswers.sort(() => Math.random() - 0.5);
    return(
        <div>
        <p>${i+1}.${questionData}</p>
        <ul>
                      ${allAnswers.map(answer => `
                          <input type="radio" id="${answer}" name="quiz_option" value="${answer}">
                          <label for="${answer}">${answer}</label><br>
                      `).join('')}
                  </ul>
        </div> 
    );

}
export default Results