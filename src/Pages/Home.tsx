import React from "react";
import { 
  Container1,
  Container2, 
  ContainerCentral, 
  Divlogo, 
  Globalstyle, 
  LogoImg, 
  StyleH2,LoginForm } from "./style";
import Logo from '../assets/Logo.png';
import Form from '../components/form/Form';
import { ButtonSend } from '../components/Buttons/ButtonSend';
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";





export default function Home() {
  const { width } = useWindowSize();



  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Formulário enviado com sucesso!');
  };

  return (
    <ContainerCentral>
      <Globalstyle />
      <Container1>
        <Divlogo style={{ borderRadius: '15px' }}>
          <LogoImg src={Logo} alt="Logo" />
         
        </Divlogo>
        <Link to='/register' style={{marginTop: '90px',marginLeft: '300px', color: '#f5f5f5',fontSize: '14px',textAlign: 'center'}}>
            Ainda não tem acesso? Registre-se para acessar os conteúdos
          </Link>
      </Container1>
      <Container2>
        {width <= 600 && <StyleH2>CronoTask</StyleH2>}
        <LoginForm
          onSubmit={handlerSubmit}
          action=""
        >
          <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Login</h2>
          <Form />
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <Link to='/forgot' style={{ fontSize: '13px', color: '#DC143C',marginLeft: '200px' }}>
              Esqueceu a senha?
            </Link>
          </div>
          <ButtonSend
            type="submit"
            buttonName="Enviar"
          />
        
        </LoginForm>
      </Container2>
    </ContainerCentral>
  );
}





