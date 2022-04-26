import { useState } from "react";
import NftCard from "./nftCard";
import styles from "/styles/NftList.module.css";

export default function NftList(props) {
  const { userNfts } = props;
  const [playing, setPlaying] = useState(false);

  return (
    <section>
      <h3 style={{ textAlign: "center" }}>Deine Kollektion</h3>
      <div className={styles.grid}>
        {userNfts.map((nft, i) => {
          return (
            <NftCard
              key={`nft-${i}`}
              nft={nft}
              playing={playing}
              setPlaying={setPlaying}
            />
          );
        })}
      </div>
    </section>
  );
}
