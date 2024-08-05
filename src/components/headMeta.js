import Head from "next/head";
import React, { useState } from 'react';

const HeadMeta = ( meta ) => {
    const Title = meta.title || "YAGVSMP";
    const Desc = meta.desc || "Yet Another Vanilla SMP";

    return (
        <Head>
            <title>{Title}</title>
            <meta
                name="description"
                content={Desc}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2ecc71" />
        
            <link rel="icon" href="/favicon/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>

            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    );
};

export default HeadMeta;