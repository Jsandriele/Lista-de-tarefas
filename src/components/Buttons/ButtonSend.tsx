import React from 'react';
import { Button,Stack } from '@mui/material';

type ButtonName = 'Enviar' | 'Cancelar' | 'Confirmar' | 'Voltar';

interface ButtonProps{
   type?:  'submit' | 'button';
   onClick: (event:React.MouseEvent<HTMLFormElement['form']>)=> void;
   buttonName: ButtonName;

}
export const ButtonSend: React.FC<ButtonProps> = ({ type = 'submit', onClick, buttonName }) => {
  return (
    <Stack  
      spacing={2} 
      direction="row"
      style={{display: 'flex', justifyContent: 'center', padding: 20,marginTop: '20px',marginBottom: '30px'}}
      >
      <Button
        variant="contained"
        size='large'
       type={type} 
       onClick={onClick} 
       >
          {buttonName}
      </Button>
    </Stack>
  )
}

