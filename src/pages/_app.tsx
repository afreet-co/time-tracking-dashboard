import "../styles/global.css";
import Head from "next/head";
import { AppContextProvider } from "../context/AppContext";

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
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
};

export default Application;
