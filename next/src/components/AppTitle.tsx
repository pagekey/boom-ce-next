import { Title } from "@mantine/core"
import Head from "next/head"

interface AppTitleProps {
    children: any
}
export default function AppTitle(props: AppTitleProps) {
    return (
        <>
            <Head><title>{props.children} &bull; Boom</title></Head>
            <Title>{props.children}</Title>
        </>
    )
}