import AppTitle from '@/components/AppTitle';
import { useEffect, useState } from 'react';
import { TextInput, Button, Alert } from '@mantine/core';
import { useRouter } from 'next/router';
import { setSecureCookie } from '@/util/setSecureCookie';
import { redirectIfAlreadyLoggedIn } from '@/util/redirect';
import { useAuth } from '@/context/AuthContext';


export default function RegisterPage() {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => redirectIfAlreadyLoggedIn(router, auth), [auth]);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    setError('');

    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          passwordConfirmation,
        }),
      });

      if (response.status == 200) {
        const { status, message, boom_auth } = await response.json();
        setSecureCookie('boom_auth', boom_auth, 30);
        router.push('/');
      } else {
        setError('An unknown error occurred when trying to register 😭');
      }
    } catch (e) {
      console.error('Error registering user account', e);
      setError('An unknown error occurred when trying to register 😭');
    }
  };

  return (
    <>
      <AppTitle>Register</AppTitle>

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
        <TextInput
          label='Confirm Password'
          className='mt-2'
          type='password'
          value={passwordConfirmation}
          minLength={8}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <Button
          className='mt-2'
          type='submit'
          disabled={!email || !password || password !== passwordConfirmation}
        >
          Create Account
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
