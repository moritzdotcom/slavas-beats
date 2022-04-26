import { ethers } from "ethers";
import styles from "/styles/Home.module.css";

export default function MintData(props) {
  const { mintCount, totalCount, price } = props;

  return (
    <section style={{ display: "flex" }}>
      <div className={styles.box} style={{ width: "50%", textAlign: "center" }}>
        <p>Minted NFTs</p>
        <h2>
          {mintCount} / {totalCount}
        </h2>
      </div>
      <div className={styles.box} style={{ width: "50%", textAlign: "center" }}>
        <p>Price</p>
        <h2>{ethers.utils.formatUnits(price, process.env.USDC_DECIMALS)} $</h2>
      </div>
    </section>
  );
}
