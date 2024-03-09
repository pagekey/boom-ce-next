import AppTitle from '@/components/AppTitle';
import { useState } from 'react';
import { TextInput, Button, Alert } from '@mantine/core';
import { useRouter } from 'next/router';
import { setSecureCookie } from '@/util/setSecureCookie';

export default function ResetPasswordPage() {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async () => {
    setError('');

    const genericErrorMessage =
      'An unknown error occurred when trying to reset the user password 😭';

    try {
      const response = await fetch('/api/user/reset-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
          newPasswordConfirmation,
        }),
      });

      if (response.status == 200) {
        const { status, message, boom_auth } = await response.json();
        setSecureCookie('boom_auth', boom_auth, 30);
        router.push('/');
      } else {
        setError(genericErrorMessage);
      }
    } catch (e) {
      console.log('Error resetting user password', e);
      setError(genericErrorMessage);
    }
  };

  return (
    <>
      <AppTitle>Reset Password</AppTitle>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit();
        }}
      >
        <TextInput
          label='Old Password'
          className='mt-2'
          type='password'
          value={oldPassword}
          minLength={8}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <TextInput
          label='New Password'
          className='mt-2'
          type='password'
          value={newPassword}
          minLength={8}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <TextInput
          label='Confirm New Password'
          className='mt-2'
          type='password'
          value={newPasswordConfirmation}
          minLength={8}
          onChange={(e) => setNewPasswordConfirmation(e.target.value)}
          required
        />
        <Button
          className='mt-2'
          type='submit'
          disabled={!oldPassword || !newPassword || newPassword !== newPasswordConfirmation}
        >
          Reset Password
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
