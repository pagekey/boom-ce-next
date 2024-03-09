import AppTitle from '@/components/AppTitle';
import { useState } from 'react';
import { TextInput, Button, Alert } from '@mantine/core';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async () => {
    setError('');

    try {
      const response = await fetch('/api/user/login', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status == 200) {
        // TODO: Extract token and save as HttpOnly cookie
        router.push('/');
      } else {
        setError('An unknown error occurred when trying to login 😭');
      }
    } catch (e) {
      console.log('Error logging user in', e);
      setError('An unknown error occurred when trying to login 😭');
    }
  };

  return (
    <>
      <AppTitle>Login</AppTitle>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit();
        }}
      >
        <TextInput
          placeholder='Email'
          className='mt-2'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          placeholder='Password'
          className='mt-2'
          type='password'
          value={password}
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className='mt-2' type='submit'>
          Login
        </Button>
      </form>

      {error && (
        <Alert color='red' className='mt-2'>
          {error}
        </Alert>
      )}
    </>
  );
}
