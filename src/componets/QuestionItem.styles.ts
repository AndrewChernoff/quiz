import styled from "styled-components";

type ButtonProps = {
  isCorrect: boolean,
  isAnswered: boolean
}

export const Button = styled.div<ButtonProps>`

button {
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  background: ${({ isCorrect, isAnswered }) =>
  isCorrect && isAnswered
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !isCorrect && isAnswered
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
 
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 0px;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0 0 0 / 25%) 0px 1px 0px;
}
`;
