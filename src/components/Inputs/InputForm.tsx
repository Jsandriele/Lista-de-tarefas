import React from 'react'
import Box from '@mui/material/Box'
import TextField  from '@mui/material/TextField';


interface InputProps{
    type: string;
    label: string;
    required: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}


export   const InputForm : React.FC<InputProps> = ({type,onChange,label,required,value}) => {
  
  return(
    <Box color='purple'  style={{display: 'flex', justifyContent: 'center', padding: 20,}}>
      <TextField 
        style={{width: 300}}
        id="outlined-basic" 
        label={label} 
        variant="outlined" 
        type={type} 
        onChange={onChange} 
        required={required} 
        value={value}/>
    </Box>
  )

}
