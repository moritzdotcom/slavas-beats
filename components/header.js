import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cover1 from "/assets/cover-1.jpeg";
import cover2 from "/assets/cover-2.jpeg";
import cover3 from "/assets/cover-3.jpeg";
import cover4 from "/assets/cover-4.jpeg";
import cover5 from "/assets/cover-5.jpeg";
import Image from "next/image";
import headerStyles from "/styles/Header.module.css";
import neonStyles from "/styles/Neon.module.css";

export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      <Carousel
        arrows={false}
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={1}
        containerClass="container-with-dots"
        customTransition="all 4s linear"
        focusOnSelect={false}
        infinite
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={4000}
      >
        <Image src={cover1} alt="cover-1" width="500" height="500" />
        <Image src={cover2} alt="cover-2" width="500" height="500" />
        <Image src={cover3} alt="cover-3" width="500" height="500" />
        <Image src={cover4} alt="cover-4" width="500" height="500" />
        <Image src={cover5} alt="cover-5" width="500" height="500" />
      </Carousel>
      <h1
        className={neonStyles.neonText}
        style={{ position: "absolute", width: "100%", fontSize: "8vw" }}
      >
        Slavas Beats NFT
      </h1>
    </header>
  );
}
