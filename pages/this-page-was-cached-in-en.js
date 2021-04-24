import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { detectBrowserLanguageAndRedirect } from "../lib/detectBrowserLanguageAndRedirect";

export default function ThisPageWasCachedInEnUS() {
  const { locale } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>This page was first cached in en (default locale)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        This page was first cached in en which is the defaultLocale.
        <br />
        Current locale: <strong>{locale}</strong>
        <br />
        <br />
        To Reproduce the issue:
        <br />- Open this page with a (fr/es browser), you will not be
        redirected.
        <br />
        <br />
        <a href="/this-page-was-cached-in-fr" style={{ color: "blue" }}>
          Go to this-page-was-cached-in-fr, no issue on this one
        </a>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  detectBrowserLanguageAndRedirect(context);

  return { props: {} };
}
