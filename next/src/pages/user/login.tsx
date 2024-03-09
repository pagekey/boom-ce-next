import AppTitle from '@/components/AppTitle';
import { useState } from 'react';
import { TextInput, Button, Alert } from '@mantine/core';
import { useRouter } from 'next/router';
import { setSecureCookie } from '@/util/setSecureCookie';

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
          email,
          password,
        }),
      });

      if (response.status == 200) {
        const { status, message, boom_auth } = await response.json();
        setSecureCookie('boom_auth', boom_auth, 30);
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
          label='Email'
          className='mt-2'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          label='Password'
          className='mt-2'
          type='password'
          value={password}
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button disabled={email.length < 1 || password.length < 1} className='mt-2' type='submit'>
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
