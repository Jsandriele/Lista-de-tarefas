import React, { useState } from "react"
import { TextField,Box,FormHelperText } from "@mui/material";



interface PasswordProps {
    required: true;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    showPassword?: boolean;
    title?: string;
    pattern?: string;
    helperText: string;
}

export const InputPassword: React.FC<PasswordProps> = ({
    required,
    onChange,
    label,
    value,
    showPassword = false,
    title,
    pattern,
    
}) => {
    const [error,setError] = useState<string|null>(null);

    const validatePattern = (value: string) => {
        if (pattern) {
            const regex = new RegExp(pattern);
            if (!regex.test(value)) {
                setError("senha não está no padrão!");
            } else {
                setError(null);
            }
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(event);
        validatePattern(newValue); // Valida o padrão sempre que o valor muda
    };




    return (
        <Box  style={{display: 'flex', justifyContent: 'center',padding: '20px 20px 0px 20px', flexDirection: 'column',alignItems: 'center',}}>
            <TextField
                style={{width: 300}}
                id="outlined-password-input" label={label} variant="outlined" 
                type={showPassword ? 'text' : 'password'}
                required={required}
                onChange={handleChange}
                value={value}
                title={title}   
                error={!!error}           
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
        </Box>
    )
}