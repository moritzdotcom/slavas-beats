import Document, { Html, Head, Main, NextScript } from "next/document";

class SlavasBeatsDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Minting Page for the Slavas Beats NFT"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="Mint Your SlavasBeatsNFT" />
          <meta name="twitter:url" content="https://slavasbeats.com" />
          <meta name="twitter:title" content="SlavasBeatsNFT" />
          <meta
            name="twitter:description"
            content="Minting Page for the Slavas Beats NFT"
          />
          <meta
            name="twitter:image"
            content="https://slavasbeats.com/images/homescreen192.png"
          />
          <meta name="twitter:creator" content="@moritzloechner" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SlavaBeatsNFT" />
          <meta
            property="og:description"
            content="Minting Page for the Slavas Beats NFT"
          />
          <meta property="og:site_name" content="SlavaBeatsNFT" />
          <meta property="og:url" content="https://slavasbeats.com" />
          <meta
            property="og:image"
            content="https://slavasbeats.com/images/homescreen512.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SlavasBeatsDocument;
