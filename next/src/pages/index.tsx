import { useAuth } from "@/context/AuthContext";
import { redirectIfAlreadyLoggedIn } from "@/util/redirect";
import { Button, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => redirectIfAlreadyLoggedIn(router, auth), [auth]);

  return (
    <>
      <Title>Welcome home.</Title>
      <div>
        Auth: {JSON.stringify(auth)}
      </div>
      <div>
        Temporary testing links:
      </div>
      <Button component='a' href='/user/activation_failed'>Activation Failed Page</Button>
      <Button component='a' href='/user/dashboard'>Dashboard Page</Button>
      <Button component='a' href='/user/forgot_password'>Forgot Password Page</Button>
      <Button component='a' href='/user/onboard_user'>Onboard User Page</Button>
      <Button component='a' href='/user/reset-password'>Reset Password</Button>
    </>
  );
}
