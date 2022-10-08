import { Button } from "./QuestionItem.styles";

/* type Props = {
    checkAnswer: (e: any) => void ,
    isAnswered: boolean,
    value: string,
    isCorrect: boolean
} */

type Props = {
  questions: string[],
  isAnswered: boolean,
  checkAnswer: (e:any) => void,
  userAnswers: any[],
  quizNumber: number
};

const QuestionItem: React.FC<Props> = ({ questions, isAnswered, userAnswers, quizNumber, checkAnswer }) => {
  return (<>
      {questions.map((el, i) => {
        return (
          <Button key={i} isCorrect={userAnswers[quizNumber]?.correctAnswer === el} isAnswered={isAnswered}  isClicked={userAnswers[quizNumber]?.isClicked}>
            <button onClick={checkAnswer} disabled={isAnswered} value={el}>
              {el}
            </button>
          </Button>
        );
      })}
      </>
  );
};

export default QuestionItem;
