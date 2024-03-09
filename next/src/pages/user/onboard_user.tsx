// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#onboard-user-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { Button, MultiSelect, TextInput } from "@mantine/core";
import { useState } from "react";


export default function OnboardUserPage() {
    const [displayName, setDisplayName] = useState<string>('');

    return (
        <>
            <AppTitle>Gettng Started</AppTitle>
            <div>
                Let's set up your account!
            </div>
            <TextInput
                label='Display name'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />
            <MultiSelect
                label="Native Language"
                placeholder="Pick all that you speak"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />

            <Button component="a" href="/">
                Return home
            </Button>
        </>
    )
}
