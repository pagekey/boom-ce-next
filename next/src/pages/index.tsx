import { trpc } from "@/util/trpc";
import { Button } from "@mantine/core";
import { Inter } from "next/font/google";
import { Loader } from '@mantine/core';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const requestExample = trpc.example.index.useQuery();

  if (requestExample.isLoading) {
    return <Loader />;
  } else if (requestExample.error) {
    return "An error occurred";
  } else if (!requestExample.data) {
    return "Error: no data received.";
  } else {
    return (
        <>
            <div>
                Here's some data! {requestExample.data}
            </div>
            <Button color='red'>Do nothing</Button>
        </>
    );
  }
}
