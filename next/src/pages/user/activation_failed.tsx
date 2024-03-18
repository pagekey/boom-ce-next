// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#activation-failed-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { Button } from "@mantine/core";


export default function ActivationFailedPage() {
    return (
        <>
            <AppTitle>Account Activation Failed</AppTitle>
            <div>
                We were not able to activate your account. Try again or contact our support.
            </div>
            <Button component="a" href="/">
                Return home
            </Button>
        </>
    )
}
