import { useState } from "react";
import QuestionItem from "./componets/QuestionItem";
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
  const [isFinished, setIsFinished] = useState(false);
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<any>([]);

  const loadQuestions = async () => {
    setLoading(true);
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
    setUserAnswers([])
    setStart(true);
    setScore(0);
    setIsFinished(false);
    setIsAnswered(false);
    setQuizNumber(0);
    loadQuestions().then((res) => {
      setQuizQuestions(res);
      setLoading(false);
    });
  };

  const onNextClick = () => {
    setQuizNumber(quizNumber + 1);
    setIsAnswered(false);
  };

  const checkAnswer = (elementValue: string, id: any) => {
    console.log(id)
    const answer = elementValue;
    const correct = answer === quizQuestions[quizNumber].correctAnswer
    setUserAnswers((prev: any) => [...prev, {
      ansId: id,
      userAnswer: answer,
      isCorrect: correct,
      correctAnswer: quizQuestions[quizNumber].correctAnswer,
      isClicked: true
    }]);

    if (answer === quizQuestions[quizNumber].correctAnswer) {
      setScore((score) => score + 1);
    }

    setIsAnswered(true);
    if (quizNumber + 1 === quizQuestions.length) {
      setIsFinished(true);
      setStart(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Content>
        <h1>REACT Quiz</h1>

        {!start ? (
          <>
          <button onClick={onStartClick} className="quiz__start">
            Start
          </button>
                  <div className="quiz__score">Score: {score} </div>
                  </>
        ) : null}
        {loading ? <h2 className="quiz__loading">Loading...</h2> : null}
        
        {quizQuestions.length !== 0 ? (
          <>
          <div className="quiz__score">Score: {score} </div>
          
          <div className="quiz__content">
            <p className="quiz__number">
              {quizNumber + 1} / {quizQuestions.length}
            </p>
            <p>
              {quizQuestions.length !== 0
                ? quizQuestions[quizNumber].question
                : null}
            </p>

            <div className="quiz__answers">
              {quizQuestions.length !== 0
                ?<QuestionItem questions={quizQuestions[quizNumber].answers} 
                  isAnswered={isAnswered}
                  userAnswers={userAnswers}
                  quizNumber={quizNumber}
                  checkAnswer={checkAnswer}
                  />
                : null}
            </div>
          </div>
          </>
        ) : null}

        {!isFinished && isAnswered ? (
          <button onClick={onNextClick} className="quiz__nextQuestion">
            Next question
          </button>
        ) : null}
      </Content>
    </>
  );
};

export default App;
