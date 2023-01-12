import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.SITE_TITLE}</title>
      </Head>

      <main>
        <div className="container mx-auto">asd</div>
      </main>
    </>
  );
}
