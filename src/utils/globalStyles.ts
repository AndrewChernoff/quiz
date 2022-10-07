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
    font-size: 64px;
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

  .quiz__loading {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    margin: 0 0 10px 0;
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;
