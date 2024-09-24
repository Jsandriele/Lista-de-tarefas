import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { IconButton, Input } from '@mui/material';
import { useState } from 'react';



export default function AvatarBar() {
  const [avatar, setAvatar] = useState<string>('/static/images/avatar/1.jpg');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
                if (reader.result) {
          setAvatar(reader.result as string); // Assegura que é uma string
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack alignItems="center">
      <label>
        <IconButton component="span">
          <Avatar alt='User avatar' src={avatar}  sx={{width: 46,height: 46}}/>
        </IconButton>
        <Input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={{ display: 'none' }}
        />
      </label>
    </Stack>
  );
}
