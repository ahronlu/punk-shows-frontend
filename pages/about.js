import Head from "next/head";

import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Punk Shows">
      <Head>
        <title>Punk Show - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
      <p>This is an app to find punk shows</p>
      <p>Version: 1.0.0</p>
    </Layout>
  );
}
