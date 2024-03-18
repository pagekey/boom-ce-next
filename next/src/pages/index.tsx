import { trpc } from "@/util/trpc";
import { Button } from "@mantine/core";
import { Inter } from "next/font/google";
import { Loader } from '@mantine/core';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const requestExample = trpc.example.index.useQuery();

  // if (requestExample.isLoading) {
  //   return <Loader />;
  // } else if (requestExample.error) {
  //   return "An error occurred";
  // } else if (!requestExample.data) {
  //   return "Error: no data received.";
  // } else {
    return (
        <>
          <div>
            Temporary testing links:
          </div>
          <Button component='a' href='/user/activation_failed'>Activation Failed Page</Button>
          <Button component='a' href='/user/dashboard'>Dashboard Page</Button>
          <Button component='a' href='/user/forgot_password'>Forgot Password Page</Button>
          <Button component='a' href='/user/login'>Login</Button>
          <Button component='a' href='/user/onboard_user'>Onboard User Page</Button>
          <Button component='a' href='/user/register'>Register</Button>
          <Button component='a' href='/user/reset-password'>Reset Password</Button>
        </>
    );
  // }
}
