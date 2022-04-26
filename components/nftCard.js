import { useEffect, useRef, useState } from "react";
import styles from "/styles/NftList.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from "react-icons/ai";
import OpenSeaIcon from "./openSeaIcon";

export default function NftCard(props) {
  const { nft, playing, setPlaying } = props;
  const [paused, setPaused] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const videoElement = useRef(null);

  const togglePlay = () => {
    setPaused(!videoElement.current.paused);
    if (videoElement.current.paused) {
      setPlaying(nft.tokenId);
      videoElement.current.play();
    } else {
      videoElement.current.pause();
    }
  };

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const updatePlaytime = (e) => {
    const percentage =
      videoElement.current.currentTime / videoElement.current.duration;

    if (percentage >= 1) {
      setPercentage(0);
      setPaused(true);
    } else {
      setPercentage(percentage);
    }
  };

  useEffect(() => {
    if (playing != nft.tokenId) {
      setPaused(true);
      videoElement.current.pause();
    }
  }, [playing]);

  return (
    <div className={styles.flipCard}>
      <div className={styles.item}>
        <div
          className={styles.itemFront}
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div
            className={styles.progressBar}
            style={{
              left: 0,
              top: 0,
              width: `${Math.min(100, percentage * 400)}%`,
              height: 10,
            }}
          ></div>
          <div
            className={styles.progressBar}
            style={{
              right: 0,
              top: 0,
              width: 10,
              height: `${Math.min(
                100,
                Math.max((percentage - 0.25) * 400, 0)
              )}%`,
            }}
          ></div>
          <div
            className={styles.progressBar}
            style={{
              right: 0,
              bottom: 0,
              width: `${Math.min(100, Math.max((percentage - 0.5) * 400, 0))}%`,
              height: 10,
            }}
          ></div>
          <div
            className={styles.progressBar}
            style={{
              left: 0,
              bottom: 0,
              width: 10,
              height: `${Math.min(
                100,
                Math.max((percentage - 0.75) * 400, 0)
              )}%`,
            }}
          ></div>
          <img src={nft.image} alt={nft.name} width="100%" height="auto" />
          <a className={styles.infoButton} onClick={flipCard}>
            <AiFillInfoCircle />
          </a>
          <a className={styles.playButton} onClick={togglePlay}>
            {paused ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
          </a>
          <video
            ref={videoElement}
            src={nft.animation_url}
            style={{
              display: "hidden",
            }}
            onTimeUpdate={updatePlaytime}
          ></video>
        </div>
        <div
          className={styles.itemBack}
          style={{ transform: flipped ? "rotateY(0deg)" : "rotateY(180deg)" }}
        >
          <a className={styles.infoButton} onClick={flipCard}>
            <AiFillCloseCircle />
          </a>
          <h3>{nft.name}</h3>
          <a
            style={{ width: "100%" }}
            href={`https://opensea.io/assets/matic/${process.env.SMART_CONTRACT_ADDRESS}/${nft.tokenId}`}
            target="_blank"
            rel="noreferrer"
          >
            <OpenSeaIcon
              style={{
                width: "40%",
                minWidth: 30,
                maxWidth: 400,
                height: "auto",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
