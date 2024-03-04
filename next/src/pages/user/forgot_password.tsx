// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#forgot-password-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { Button, Input, TextInput } from "@mantine/core";
import { useState } from "react";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordPage() {
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleSubmit = () => {
        if (email.length < 1) {
            setError('You must enter an email.')    
        } else if (!EMAIL_REGEX.test(email)) {
            setError('Email format is not valid.')
        } else {
            setError('');
            console.log(email);
        }
    }

    return (
        <>
            <AppTitle>Forgot Password</AppTitle>
            <div>
                Use this form to reset the password to your Boom Languages account.
            </div>
            <TextInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
                error={error}
            />
            <Button
                onClick={() => handleSubmit()}
            >
                Submit
            </Button>
        </>
    )
}
