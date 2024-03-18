// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#onboard-user-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { trpc } from "@/util/trpc";
import { Button, Select, TextInput } from "@mantine/core";
import { Language } from "@prisma/client";
import { useState } from "react";


export default function OnboardUserPage() {
    const request = trpc.user.getLanguages.useQuery();
    const requestSubmit = trpc.user.onboardUser.useMutation();

    const [error, setError] = useState<string>('');

    const [languages, setLangauges] = useState<Language[]>([
        {
            id: 1,
            name: "English",
            code: "en",
        },
        {
            id: 2,
            name: "Spanish",
            code: "es",
        },
    ]);
    const [nativeLanguage, setNativeLanguage] = useState<Language>(languages[0]);
    const [targetLanguage, setTargetLanguage] = useState<Language>(languages[0]);

    const [displayName, setDisplayName] = useState<string>('');

    const formValid: boolean = displayName !== undefined
        && displayName.length > 0 
        && nativeLanguage !== undefined 
        && targetLanguage !== undefined 
        && nativeLanguage.id !== targetLanguage.id;

    const handleChangeNative = (name: string|null, option: any) => {
        const matchedLanguage = languages.find(lang => lang.name == name);
        if (matchedLanguage) {
            setNativeLanguage(matchedLanguage);
        }
    }
    const handleChangeTarget = (name: string|null, option: any) => {
        const matchedLanguage = languages.find(lang => lang.name == name);
        if (matchedLanguage) {
            setTargetLanguage(matchedLanguage);
        }
    }

    const handleSubmit = async () => {
        requestSubmit.mutate({
            displayName: displayName,
            nativeLanguageId: nativeLanguage.id,
            targetLanguageId: targetLanguage.id,
        });
    };

    let errorMessage = <></>
    if (error.length > 0) {
        errorMessage = <>{error}</>
    } else if (requestSubmit.data && requestSubmit.data.status == 'error') {
        errorMessage = <>{requestSubmit.data.message}</>
    }

    return (
        <>
            <AppTitle>Gettng Started</AppTitle>
            <div>
                Let's set up your account!
            </div>
            <div className='text-red-500'>
                Error: {errorMessage}
            </div>
            <TextInput
                label='Display name'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />
            <Select
                label="Native Language"
                placeholder="Choose the language you already know best."
                data={languages.map(lang => lang.name)}
                value={nativeLanguage.name}
                onChange={(value, option) => handleChangeNative(value, option)}
            />
            <Select
                label="Target Language"
                placeholder="Choose the language you want to learn first."
                data={languages.map(lang => lang.name)}
                value={targetLanguage.name}
                onChange={(value, option) => handleChangeTarget(value, option)}
            />

            <Button
                onClick={() => handleSubmit()}
                disabled={!formValid}
            >
                Submit
            </Button>
        </>
    )
}
