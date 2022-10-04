import styled, { createGlobalStyle } from "styled-components";
import background from "../images/backgroundIMG.jpg";

const GlobalStyle = createGlobalStyle`
* {
    font-family: Catamaran;

}

body {
    height: 800px;
    background: url(${background}) center center/cover no-repeat;
  }
`;

export const Content = styled.div`
  .quiz {
    margin: 0 auto;
    color: green;
  }

  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .quiz__answers {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
  }

  .quiz__score {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    margin: 0 0 10px 0;
  }

  .quiz__content {
    margin: 0 auto;
    max-width: 1100px;
    background: rgb(235, 254, 255);
    border-radius: 10px;
    border: 2px solid rgb(0, 133, 163);
    padding: 20px;
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    text-align: center;
  }

  .quiz__start, .quiz__nextQuestion {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145));
    border: 2px solid rgb(211, 133, 88);
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0px 40px;
  }

  .quiz__answers button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    background: linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180));
    border: 3px solid rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 1px 2px 0px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(0 0 0 / 25%) 0px 1px 0px;
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;