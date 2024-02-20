import { Button } from "@mantine/core";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      hello
      <Button>Mantine button</Button>
      <div className='bg-red-400'>this is a tailwind div</div>
    </>
  );
}
