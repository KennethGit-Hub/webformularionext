import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className={styles.title}>
          Welcome to <a href="/">Risk and Win Peru</a>
        </h1>
        <p className={styles.description}>
          Tu sitio de apuestas <code className={styles.code}>R&W Peru</code>
        </p>

        {/* <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        </footer> */}
      </Container>
    </>
  );
}
