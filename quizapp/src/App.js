import {React,useState} from "react"
// import logo from './logo.svg';
import Heading from "./Heading"
import Body from "./Body"
import  Axios from "axios";
import "./App.css"
// import Results from "./Results"

const App = () => {
  const [question,setQuestion] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  function getQuestion(){
    Axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
    .then((response) => {
      console.log("54trgjkvcfgdyghk")
      console.log(response);
      console.log(response.data);
      setQuestion(response.data.results)
      console.log()
      setCurrentQuestionIndex(0);
    })
  }
  const currentQuestion = question[currentQuestionIndex]; // Get the current question
  return (
    <div>
      <Heading/>
      <Body getQuestion={getQuestion} setQuestion={setQuestion} setCategory={setCategory} setDifficulty={setDifficulty} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} currentQuestion = {currentQuestion} />
      </div>
  );
}

export default App;
