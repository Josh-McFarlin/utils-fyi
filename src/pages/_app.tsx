import * as React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../../public/static/styles/App.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <title>utils-fyi</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap"
        rel="stylesheet"
      />
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
            url: "https://tools.fyi/android-chrome-512x512.png",
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
