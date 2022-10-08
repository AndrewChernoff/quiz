import { Button } from "./QuestionItem.styles";

type Props = {
  questions: string[],
  isAnswered: boolean,
  checkAnswer: (elementValue: string, id: any) => void,
  userAnswers: any[],
  quizNumber: number
};

const QuestionItem: React.FC<Props> = ({ questions, isAnswered, userAnswers, quizNumber, checkAnswer }) => {
  return (<>
      {questions.map((el, i) => {
        return (
          <Button key={i} isAnswerId={userAnswers[quizNumber]?.ansId === i}  isCorrect={userAnswers[quizNumber]?.correctAnswer === el} isAnswered={isAnswered} isClicked={userAnswers[quizNumber]?.isClicked}>
            <button onClick={() => checkAnswer(el,i)} disabled={isAnswered} value={el}>
              {el}
            </button>
          </Button>
        );
      })}
      </>
  );
};

export default QuestionItem;
