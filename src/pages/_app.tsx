import "../styles/global.css";
import Head from "next/head";

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
