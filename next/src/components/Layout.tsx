import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Link from "next/link";


export default function Layout({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <div>Boom Languages</div>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <Link href="/">Home</Link>
                </AppShell.Navbar>

                <AppShell.Main>
                    {children}
                </AppShell.Main>
            </AppShell>
        </>
    )
}