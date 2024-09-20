import { Button, Checkbox, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LogoImg } from './style';
import Logo from '../assets/Logo1.png';

import { FormRegister, Container2 } from './style';
import useWindowSize from '../hooks/useWindowSize';

interface IFormProps{
  name: string;
  emael: string;
  senha: string;
  confirmarsenha: string;
}


export default function Register() {
  const { register, handleSubmit, formState: {errors},watch } = useForm<IFormProps>();
  const { width } = useWindowSize()
  const onSubmit: SubmitHandler<IFormProps>= (data) => {
    console.log(data);
  };

  const senha= watch('senha')
  return (
    <Container2>
      <FormRegister
        onSubmit={handleSubmit(onSubmit)}

      >
        <LogoImg src={Logo} alt="Logo"
           style={{ 
            width: 100, 
            marginTop: 10,
             borderRadius: 15,
              marginBottom: 20 }} />
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
            error={!!errors.name}
            helperText={errors.name?.message}
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
            {...register('Email', { required: true, })}
            sx={{ width: 300 }}
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
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
            {...register('senha', {
              required: true,
              minLength: 6,
              maxLength: 8,
              pattern: {
                
                message: 'A senha deve ter entre 6 e 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
              }
            })}
            sx={{ width: 300 }}
            fullWidth
            error={!!errors.senha}
            helperText={errors.senha?.message}
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
            {...register('confirmarsenha', {
              required: true,
              maxLength: 8,
              minLength: 6,
              validate: value => value === senha || 'As senhas não coincidem.'
            })}
            sx={{ width: 300 }}
            fullWidth
            error={!!errors.confirmarsenha}
            helperText={errors.confirmarsenha?.message}
          />
        </div>
        <div>
          <Checkbox style={{ marginTop: width <= 768 ? '10px' : '20px' }} />
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
              marginTop: width <= 768 ? '0' : '5px',
              width: width <= 768 ? '200' : '300px'
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
