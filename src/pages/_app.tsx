import * as React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "normalize.css";
import "../../public/static/styles/App.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>utils-fyi</title>
    </Head>
    <DefaultSeo
      openGraph={{
        type: "website",
        locale: "en",
        url: "https://utils.fyi",
        // eslint-disable-next-line @typescript-eslint/camelcase
        site_name: "utils-fyi",
        title: "utils-fyi",
        description: "Tools for everyone!",
        images: [
          {
            url: "https://utils.fyi/android-chrome-512x512.png",
            width: 512,
            height: 512,
            alt: "Logo Alt",
          },
        ],
      }}
    />

    <div id="Content">
      <Component {...pageProps} />
    </div>
  </>
);

export default MyApp;
