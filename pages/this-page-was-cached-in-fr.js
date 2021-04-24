import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { detectBrowserLanguageAndRedirect } from "../lib/detectBrowserLanguageAndRedirect";

export default function ThisPageWasCachedInEnUS() {
  const { locale } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>This page was first cached in fr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        This page was first cached in fr.
        <br />
        Current locale: <strong>{locale}</strong>
        <br />
        <br />
        To Reproduce the issue:
        <br />- Open this page with a (fr/es browser), you will not be
        redirected.
        <br />
        <br />
        <a href="/this-page-was-cached-in-en" style={{ color: "blue" }}>
          Go to this-page-was-cached-in-en, there is an issue on this page
          (check it with a browser in es|fr)
        </a>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  detectBrowserLanguageAndRedirect(context);

  return { props: {} };
}
