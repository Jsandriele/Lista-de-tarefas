import { Button, Checkbox, TextField } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { LogoImg } from './style';
import Logo from '../assets/Logo.png';
import { FormRegister,Container2} from './style';


export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };


  return (
    <Container2>
      <FormRegister
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <LogoImg src={Logo} alt="Logo" style={{ width: 100, marginTop: 20 }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
          }}
        >
          <TextField
            hiddenLabel
            type="text"
            label="Nome Completo"
            {...register('name', { required: true })}
            sx={{ width: 300, color: '#fff' }}
            fullWidth
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
          }}
        >
          <TextField
            hiddenLabel
            type="email"
            label="Email"
            {...register('Email', { required: true })}
            sx={{ width: 300 }}
            fullWidth
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
          }}
        >
          <TextField
            hiddenLabel
            type="password"
            label="Senha"
            {...register('senha', { required: true, minLength: 6, maxLength: 8 })}
            sx={{ width: 300 }}
            fullWidth
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            hiddenLabel
            type="password"
            label="Confirmar senha"
            {...register('confirmarsenha', { required: true, maxLength: 8 })}
            sx={{ width: 300 }}
            fullWidth
          />
        </div>
        <div>
          <Checkbox />
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: 14,
              color: '#212f3c',
            }}
          >
            Aceitar os termos de privacidade.
          </span>
        </div>
        <div>
          <Button
            style={{
              marginBottom: '10px',
              marginTop: '30px',
              width: '350px',
            }}
            onClick={() => handleSubmit(onSubmit)()}
            variant="contained"
          >
            Confirmar
          </Button>
        </div>
      </FormRegister>
    </Container2>
  );
}
