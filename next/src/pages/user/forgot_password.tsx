// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#forgot-password-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { trpc } from "@/util/trpc";
import { Button, Input, Loader, LoadingOverlay, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordPage() {
    const request = trpc.user.forgotPassword.useMutation();

    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleSubmit = () => {
        if (email.length < 1) {
            setError('You must enter an email.')
        } else if (!EMAIL_REGEX.test(email)) {
            setError('Email format is not valid.')
        } else {
            setError('');
            request.mutate({
                email: email,
            });
        }
    }

    return (
        <>
            <AppTitle>Forgot Password</AppTitle>
            <LoadingOverlay visible={request.isLoading} />
            {request.data?.status == "success" ? (
                <>
                    <div>
                        A password reset request has been sent. Please check your email for instructions.
                    </div>
                    <Button component="a" href="/">
                        Return home
                    </Button>
                </>
            ) : (
                <>
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
                        error={request.data?.message || error}
                    />
                    <Button
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </Button>
                </>
            )}
        </>
    );
}
