import React from 'react';
import { Button, Stack } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';

type ButtonName = 'Enviar' | 'Cancelar' | 'Confirmar' | 'Voltar';

interface ButtonProps {
  type?: 'submit' | 'button';
  buttonName: ButtonName;
  onClick: ()=> void;

}
export const ButtonSend: React.FC<ButtonProps> = ({ type = 'submit', buttonName, onClick }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');


  return (

    <Box sx={{
      width: isMobile ? '100%' : '100%',
      height: 65,
    }}>
      <Stack
        spacing={2}
        direction="row"
        style={{ display: 'flex', justifyContent: 'center', padding: 20, marginBottom: '30px' }}
      >
        <Button
          variant="contained"
          size='large'
          type={type}
          onClick={onClick}
          style={{width: isMobile ? '200px' : '200px'}}
        >
          {buttonName}
        </Button>
      </Stack>

    </Box>


  )
}

