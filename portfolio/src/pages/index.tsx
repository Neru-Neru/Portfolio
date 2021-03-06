import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import About from "../components/About";
import Sidebar from "../components/Sidebar";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yuma Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex w-screen h-screen text-gray-400 bg-neutral-800">
          <Sidebar />
          <>
            <Work />
          </>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
