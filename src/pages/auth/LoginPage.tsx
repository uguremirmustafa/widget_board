import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button, TextField } from '@mui/material';

function LoginPage(): JSX.Element {
  const { register } = useAuth();
  const [username, setUsername] = useState('uguremirmustafa');
  return (
    <div>
      <TextField value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button onClick={() => register(username)}>register</Button>
    </div>
  );
}

export default LoginPage;
