import PropTypes from "prop-types";
import { useState } from "react";
import AccountMenu from "../components/AccountMenu";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { AuthProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const [active, setActive] = useState(false);

  const accountActive = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const router = useRouter();

  const path = router.pathname;

  return (
    <div>
      <Head>
        <title>Breathing Deadly</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <main className="flex flex-col w-screen h-screen">
          <Navbar handleAccount={accountActive} />
          <AccountMenu active={active} handleAccount={accountActive} />
          <content
            className={`my-20 ${
              path === "/"
                ? ""
                : "pb-20 lg:pb-0 lg:pl-20 lg:absolute lg:w-screen"
            } `}
          >
            <Component {...pageProps} />
          </content>
          <BottomNav path={path} />
        </main>
      </AuthProvider>
    </div>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default MyApp;
