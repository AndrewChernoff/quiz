import { useState } from "react";
//import styles from "./App.module.css";
import GlobalStyle, { Content } from "./utils/globalStyles";
import shuffleArr from "./utils/shuffleArr";

type Resp = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

type QuestionObj = {
  answers: string[];
  question: string;
  correctAnswer: string;
};

const App = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuestionObj[]>([]);
  const [quizNumber, setQuizNumber] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  //const [gameOver, setGameOver] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [start, setStart] = useState(false);

  const loadQuestions = async () => {
    const res = await (
      await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
      )
    ).json();
    return await res.results.map((el: Resp) => {
      return {
        question: el.question,
        answers: shuffleArr([...el.incorrect_answers, el.correct_answer]),
        correctAnswer: el.correct_answer,
      };
    });
  };

  const onStartClick = () => {
    setStart(true);
    setScore(0);
    setIsFinished(false);
    setIsAnswered(false);
    //setGameOver(false);
    setQuizNumber(0);
    loadQuestions().then((res) => {
      setQuizQuestions(res);
    });
  };

  const onNextClick = () => {
    setQuizNumber(quizNumber + 1);
    setIsAnswered(false);
  };

  const checkAnswer = (e: any) => {
    const isTrueAnswer =
      e.currentTarget.value === quizQuestions[quizNumber].correctAnswer;
    console.log(isTrueAnswer);
    if (isTrueAnswer) setScore((score) => score + 1);
    setIsAnswered(true);
    if (quizNumber + 1 === quizQuestions.length) {
      //setGameOver(true);
      setIsFinished(true);
      setStart(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Content>
        <h1>REACT Quiz</h1>

        {!start ? <button onClick={onStartClick} className="quiz__start">start</button> : null}

        <div className="quiz__score">Score: {score} </div>
        {quizQuestions.length !== 0 ? (
          <div className="quiz__content">
            <p className="quiz__number">
              {quizNumber + 1} / {quizQuestions.length}{" "}
            </p>
            <p>
              {quizQuestions.length !== 0
                ? quizQuestions[quizNumber].question
                : null}
            </p>

            <div className="quiz__answers">
              {quizQuestions.length !== 0
                ? quizQuestions[quizNumber].answers.map((el, i) => {
                    return (
                      <button
                        key={i}
                        onClick={checkAnswer}
                        disabled={isAnswered}
                        value={el}
                      >
                        {el}
                      </button>
                    );
                  })
                : null}
            </div>

            
          </div>
        ) : null}

{!isFinished && isAnswered ? (
              <button onClick={onNextClick} className="quiz__nextQuestion">Next question</button>
            ) : null}
      </Content>
    </>
  );
};

export default App;
