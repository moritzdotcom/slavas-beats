import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import wunderpassLogo from "/assets/wunderpass-logo.png";
import Header from "/components/header";
import LoginWithWunderPass from "/components/loginWithWunderPass";
import { useEffect, useState } from "react";
import MintData from "/components/mintData";
import MintButton from "/components/mintButton";
import { fetchUserData, fetchMintData } from "/services/contract";
import HowToMint from "/components/howToMint";
import NftList from "/components/nftList";

export default function Home() {
  const [address, setAddress] = useState(null);
  const [userNfts, setUserNfts] = useState([]);
  const [mintCount, setMintCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [maticPrice, setMaticPrice] = useState(0);

  const handleSuccess = (data) => {
    setAddress(data.address);
  };

  const fetchUserNfts = async () => {
    if (address) {
      setUserNfts(await fetchUserData(address));
    }
  };

  useEffect(() => {
    if (address) {
      fetchUserNfts();
    }
  }, [address]);

  useEffect(() => {
    const fetchData = async () => {
      const { total, count, usdPrice, maticPrice } = await fetchMintData();
      setTotalCount(total);
      setMintCount(count);
      setPrice(usdPrice);
      setMaticPrice(maticPrice);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Slavas Beats NFT</title>
        <meta
          name="description"
          content="Minting Page for the Slavas Beats NFT"
        />
      </Head>

      <Header />
      <MintData mintCount={mintCount} totalCount={totalCount} price={price} />

      <section style={{ textAlign: "center", margin: "50px 10px" }}>
        <h4 style={{ marginBottom: 20 }}>
          Minte jetzt einen von {totalCount} Einzigartigen Slavas Beats NFTs
        </h4>
        <p style={{ marginBottom: 20 }}>
          Jeder NFT hat einen eigenen Sound, produziert von Slava Tschurilin.
        </p>
        {!address && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "50px 0",
            }}
          >
            <LoginWithWunderPass
              name="Slava Beats NFT"
              intent={["address"]}
              onSuccess={handleSuccess}
              image="https://cdn-icons-png.flaticon.com/512/6298/6298900.png"
            />
          </div>
        )}
        {address && <MintButton price={price} fetchUserNfts={fetchUserNfts} />}
      </section>

      {userNfts.length > 0 ? <NftList userNfts={userNfts} /> : <HowToMint />}

      <section className={styles.box} style={{ margin: "50px 20px" }}>
        <h3 style={{ marginBottom: "1.5rem" }}>Über SlavasBeats</h3>
        <p style={{ marginBottom: "1rem" }}>
          In ihrem Kern ist Musik reine Mathematik – berechenbare
          Luftschwingungen, deren Frequenzen sich nach physikalischen Regeln
          überlagern. Und doch geschieht eine Art Wunder: Mathematik verwandelt
          sich in Gefühl. Musikalische Beats können zutiefst berühren sowie
          Tanzvergnügungen hervorrufen.
        </p>
        <p>
          Als Diplom-Mathematiker, Programmierer und web3-Visionär geht Slava
          mit seinem elektronischen Takt einen Schritt weiter. Slava Beats steht
          für Deep House, Electro und Synth mit einem Hauch Kuschelfaktor – nun
          fraktionalisiert und verewigt als NFT.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>Powered by</p>
        <a
          href="https://wunderpass.io"
          style={{
            width: "70%",
            maxWidth: 250,
            marginTop: 10,
          }}
          className={styles.wunderpassLink}
        >
          <Image src={wunderpassLogo} alt="WunderPass Logo" />
        </a>
      </footer>
    </>
  );
}
