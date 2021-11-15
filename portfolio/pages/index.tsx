import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import About from "./About";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yuma Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <About />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
