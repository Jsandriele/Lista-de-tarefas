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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
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

  @media screen and (max-width: 1024px) {
    display: none;
    flex: 0.5;
    height: 
  }
`;

export const Divlogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
  margin-left: auto;
  margin-rigth: auto;
  width: 600px;
  height: 400px;
  padding: 25px;
  background: transparent;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
    padding: 0;
    backgound-color: #000;
  }
`;

export const LogoImg = styled.img`
  max-width: 500px;
  max-height: 300px;
  background: transparent;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    width: 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 100px;
    margin-bottom: 10px;

  }
`;

export const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 94.2%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
  }
`;

export const StyleH2 = styled.h2`
  font-family: cursive;
  font-size: 64px;
  margin-bottom: 20px;
  color: #ffff;
  text-shadow: black 0.1em 0.1em 0.2em;

  @media screen and (max-width: 1024px) {
    color: #000;
    text-shadow: #c8c8c8 0.1em 0.1em 0.2em;
    font-size: 48px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: auto;
    border: none;
    box-shadow: none;
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #c8c8c8;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  background: #faf7f6;

  @media (max-width: 1024px) {
    width: 1024px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 768px;
        height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
        height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  div {
    width: 100%;
        height: auto;

    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > .MuiTextField-root {
      width: 100%;
          height: auto;

    }

    & > .MuiCheckbox-root {
      margin-top: 10px;
    }

    & > span {
      font-family: sans-serif;
      font-size: 14px;
      color: #212f3c;
      margin-left: 8px;
    }
  }

  button {
    width: 100%;
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
