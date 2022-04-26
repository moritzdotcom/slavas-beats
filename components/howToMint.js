import styles from "/styles/Home.module.css";

export default function HowToMint(props) {
  return (
    <section className={styles.box} style={{ margin: "50px 20px" }}>
      <h3 style={{ marginBottom: "1rem" }}>How to Mint</h3>
      <p style={{ marginBottom: "1rem" }}>
        Slavas Beats NFT ist das erste NFT Projekt mit WunderPass Integration.
        So kannst du ganz einfach deinen NFT mit PayPal bezahlen
      </p>
      <p style={{ marginBottom: "1rem" }}>Und so gehts:</p>
      <ol>
        <li>
          <a
            href="https://app.wunderpass.org"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Erstelle eine WunderID
          </a>
        </li>
        <li>
          <a
            href="https://app.wunderpass.org/balance"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Lade deine WunderID auf,
          </a>{" "}
          um den NFT zu bezahlen
        </li>
        <li>
          Clicke auf den <b>Login with WunderPass</b> Button
        </li>
        <li>Clicke auf den Mint Button</li>
      </ol>
    </section>
  );
}
