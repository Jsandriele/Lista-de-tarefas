import React from "react";
import { 
  Container1,
  Container2, 
  ContainerCentral, 
  Divlogo, 
  Globalstyle, 
  LogoImg, 
  StyleH2, 
  LoginForm 
} from "./style";
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

  const click = () => {
    console.log('fui clicado');
  };

  return (
    <ContainerCentral>
      <Globalstyle />
      <Container1>
        <Divlogo style={{ marginLeft: width <= 768 ? '0' : '180px' }}>
          <LogoImg src={Logo} alt="Logo" />
        </Divlogo>
        <Link
          to='/register'
          style={{
            marginTop: '30px',
            marginLeft: width <= 768 ? '0' : '300px',
            color: '#f5f5f5',
            fontSize: width <= 768 ? '12px' : '14px',
            textAlign: 'center',
            display: 'block'
          }}
        >
          Ainda não tem acesso? Registre-se para acessar os conteúdos
        </Link>
      </Container1>
      <Container2>
        <LoginForm onSubmit={handlerSubmit}>
        {width <= 768 && <StyleH2><LogoImg src={Logo} alt="logo" style={{width: 80}}/></StyleH2>}

          <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Login</h2>
          <Form />
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <Link
              to='/forgot'
              style={{
                fontSize: '13px',
                color: '#DC143C',
                marginLeft: width <= 768 ? '0' : '200px',
                textAlign: width <= 768 ? 'center' : 'left',
                display: 'block'
              }}
            >
              Esqueceu a senha?
            </Link>
          </div>
          <ButtonSend type="submit" buttonName="Enviar" onClick={click}/>
        </LoginForm>
      </Container2>
    </ContainerCentral>
  );
}
