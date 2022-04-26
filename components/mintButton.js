import { useState } from "react";
import { initContract } from "../services/contract";
import useWunderPass from "/hooks/useWunderPass";

export default function MintButton(props) {
  const { fetchUserNfts, price } = props;
  const [waiting, setWaiting] = useState(false);
  const { smartContractTransaction } = useWunderPass({
    name: "Slava Beats NFT",
    accountId: "ABCDEF",
    image: "https://cdn-icons-png.flaticon.com/512/6298/6298900.png",
  });

  const mint = async (e) => {
    e.preventDefault();
    setWaiting(true);

    try {
      const [contract, provider] = initContract();
      const gasPrice = await provider.getGasPrice();
      const tx = await contract.populateTransaction.mintUsd({
        gasPrice: gasPrice.mul(5),
      });

      smartContractTransaction(tx, {
        amount: price,
        spender: process.env.SMART_CONTRACT_ADDRESS,
      }).then((transaction) => {
        try {
          provider
            .waitForTransaction(transaction.hash)
            .then(() => {
              fetchUserNfts();
              setWaiting(false);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error?.reason || error);
      setWaiting(false);
    }
  };

  return (
    <a
      href="https://app.wunderpass.org/smartContract"
      onClick={mint}
      disabled={waiting}
      style={{ display: "inline-block" }}
    >
      <h4
        style={{
          background: "#192858",
          borderRadius: 10,
          padding: "10px 20px",
          fontWeight: "normal",
        }}
      >
        {waiting ? "WAITING..." : "MINT NOW"}
      </h4>
    </a>
  );
}
