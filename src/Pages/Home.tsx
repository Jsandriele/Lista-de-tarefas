import { Container1, Container2, ContainerCentral, Divlogo, Globalstyle, LogoImg, } from "./style";
import Logo from '../assets/Logo.png';
import React from "react";
import Form from '../components/form/Form'
import { ButtonSend } from '../components/Buttons/ButtonSend';
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";



export default function Home() {

  const { width } = useWindowSize();


  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Formulário enviado com sucesso!');
  }

  return (
    <ContainerCentral>
      <Globalstyle/>
      <Container1>
        
        <Divlogo style={{ borderRadius: '15px'}}>
        <LogoImg
          src={Logo}
          alt="Logo"
        />
        </Divlogo>
      </Container1>
      <Container2>
      { width <= 600 && <LogoImg></LogoImg>}
        <form
          action=""
          onSubmit={handlerSubmit}
          style={{
            alignItems: "center",
            border: '#d9d9d9 solid 2px',
            boxShadow: '5px 5px 15px 5px #c8c8c8',
            borderRadius: '15px',
            height: 500,
            marginTop: 'auto',
            marginBottom: 'auto',
            backgroundColor: '#faf7f6'
          }}
        >
          <h2 
            style={{ 
              textAlign: 'center',
              marginTop: '50px'
              }}>Login</h2>
          <Form />
          <Link to='/forgot' style={{ fontSize: '13px',marginLeft: '200px', color: '#DC143C',}}>Esqueceu a senha?</Link>
          <ButtonSend
            type="submit" 
            onClick={handlerSubmit}
            buttonName="Enviar" />
          <Link to='/register' 
            style={{
              fontSize: '13px',
              marginLeft: '20px',
              color: '#000',
              textDecoration: 'none',
              marginTop: '20px',
              }}>Registre-se</Link>

        </form>
      </Container2>
    </ContainerCentral>
  );
}
