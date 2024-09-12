
import React, { useState } from 'react'
import { InputForm } from '../Inputs/InputForm'
import { InputPassword } from '../Inputs/InputPassword';
import { Container } from './style'
export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event?.target.value)
    console.log(email);
  }

  return (
    <Container>
      <InputForm
       type='string' 
       label='Email' 
       required 
       value={email} 
       onChange={handlerChange} />
      <InputPassword
        helperText=''
        label='Senha'
        onChange={(e) => { setPassword(e.target.value) }}
        required
        value={password}
        showPassword={false}
        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,8}'
        title='A senha deve conter entre 6 e 8 caracteres, incluindo uma letra maiúscula,uma letra minúscula,um número e um caractere especial'
      />
    </Container>
  )
}

