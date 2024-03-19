import Head from "next/head";
import { Inter } from "next/font/google";
import Charts from "./assignment4_student";

export default function Home() {
  return (
    <>
      <Head>
        <title>81147 Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Charts></Charts>
    </>
  );
}
