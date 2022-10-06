const { default: Document, Html, Head, Main, NextScript } = require("next/document");

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/iconx/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/iconx/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="application-name" content="Trà sữa Khaoxin" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Trà sữa Khaoxin" />
          <meta name="description" content="Trà sữa Khaoxin" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.svg" />

          <meta name="twitter:card" content="Trà sữa Khaoxin" />
          <meta name="twitter:url" content="https://khaoxin.vercel.app/" />
          <meta name="twitter:title" content="Khaoxin Milk Tea" />
          <meta name="twitter:description" content="Trà sữa Khaoxin" />
          <meta name="twitter:image" content="https://khaoxin.vercel.app/iconx/android-chrome-192x192.png" />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="Trà sữa Khaoxin" />
          <meta property="og:title" content="Khaoxin Milk Tea" />
          <meta property="og:description" content="Trà sữa Khaoxin" />
          <meta property="og:site_name" content="Khaoxin" />
          <meta property="og:url" content="https://khaoxin.vercel.app/" />
          <meta property="og:image" content="https://khaoxin.vercel.app/iconx/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument