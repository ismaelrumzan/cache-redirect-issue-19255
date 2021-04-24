import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="/this-page-was-cached-in-fr" style={{ color: "blue" }}>
          Go to "/this-page-was-cached-in-fr", no issue on this one
        </a>
        <br />
        <br />
        <a href="/this-page-was-cached-in-en" style={{ color: "blue" }}>
          Go to "/this-page-was-cached-in-en", there is an issue on this page
          (check it with a browser in es|fr)
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
