// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#onboard-user-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { trpc } from "@/util/trpc";
import { Button, Select, TextInput } from "@mantine/core";
import { useState } from "react";


export default function OnboardUserPage() {
    const request = trpc.user.getLanguages.useQuery();
    const requestSubmit = trpc.user.onboardUser.useMutation();

    const [languages, setLangauges] = useState<Language>();

    const [displayName, setDisplayName] = useState<string>('');

    const handleSubmit = () => {
        requestSubmit.mutate({
            displayName: displayName,

        });
    };


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
            <Select
                label="Native Language"
                placeholder="Choose the language you already know best."
                data={['Spanish', 'English', 'Russian']}
            />

            <Button
                onClick={() => handleSubmit()}
            >
                Submit
            </Button>
        </>
    )
}
