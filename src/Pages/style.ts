import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif, "Nerko One", cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const ContainerCentral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
`;

export const Container1 = styled.div`
  flex: 2;
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #252424;
  border-right: #d9d9d9 solid 1px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Divlogo = styled.div`
  display: flex;
  justyfi-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  width: 600px;
  padding: 25px;
  margin-left: 180px;
  background: transparent;
  box-shadow: "5px 5px 15px 5px #c8c8c8";
`;
export const LogoImg = styled.img`
  border-radius: 2vh;
  max-width: 200vh;
  max-height: 100vh;
  background: transparent;
  @media screen and (max-width: 768px) {
    align-items: center;
    max-width: 30vh;
    max-height: 30vh;
  }
`;

export const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  height: 94.2%;

  @media screen and (max-width: 768px) {
   
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const StyleH2 = styled.h2`
  font-family: cursive;
  font-size: 64px;
  margin-bottom: 20px;
  color: #ffff;
  text-shadow: black 0.1em 0.1em 0.2em;

  @media screen and (max-width: 768px) {
    color: #000;
    text-shadow: #c8c8c8 0.1em 0.1em 0.2em;
    font-size: 24px;
    text-align: center;
  }
`;
export const LoginForm = styled.form`
  align-items: center;
  border: 2px solid #d9d9d9;
  box-shadow: 5px 5px 15px 5px #c8c8c8;
  border-radius: 15px;
  height: 500px;
  margin: auto;
  background-color: #faf7f6;
  padding: 20px;

  @media screen and (max-width: 768px) {
   display: flex;
    justyfi-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    height: 100vh;
  }
`;
