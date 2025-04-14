import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Metadata */}
        <meta charSet="utf-8" />
        <meta name="description" content="NeedGov - Your comprehensive guide to understanding and accessing U.S. laws, regulations, and government services at federal, state, and local levels." />
        <meta name="keywords" content="US laws, legal system, government services, federal law, state law, local law, legal directory, gun laws, constitution" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NeedGov" />
        <meta property="og:title" content="NeedGov | The Directory to American Law" />
        <meta property="og:description" content="Your comprehensive guide to understanding and accessing U.S. laws, regulations, and government services at federal, state, and local levels." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WPGMZZ9Y8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9WPGMZZ9Y8');
          `}
        </Script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}