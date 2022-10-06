import { Button } from "./QuestionItem.styles";

type Props = {
    checkAnswer: (e: any) => void ,
    isAnswered: boolean,
    value: string,
    isCorrect: boolean
}

const QuestionItem: React.FC<Props> = ({checkAnswer, isAnswered, value, isCorrect}) => {
  return (
    <Button isCorrect={isCorrect} isAnswered={isAnswered}>
    <button onClick={checkAnswer} disabled={isAnswered} value={value}>
      {value}
    </button>
    </Button>
  );
};

export default QuestionItem;
