import { useAuth } from "@/context/AuthContext";
import { Button } from "@mantine/core";


export default function Home() {
  console.log('hello from home page');
  const auth = useAuth();
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
  // }
}
