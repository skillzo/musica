import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.scss";
import vector from "../assets/images/vector.png";
import VectorMd from "../assets/images/VectorMd.png";
import HeroImage from "../assets/images/HeroPicture.png";
import Profile from "../assets/images/profile.svg";
import { BsHeartFill } from "react-icons/bs";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header-text"]}>
        <p className="text-[#ffffffcc]">Current playlist</p>
        <div className={styles["header-text__main"]}>
          <div>
            <h1>R & B Hits</h1>
            <p>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </div>

          <div className={styles.info}>
            <Profile />
            <div className={styles["header-likes"]}>
              <BsHeartFill style={{ marginRight: "10px" }} color="#fff" />
              <div> 33k Likes</div>
            </div>
          </div>
        </div>
      </div>
      <Image src={HeroImage} alt="heroimage" className={styles.heroimage} />
      <Image src={VectorMd} alt="vector" className={styles.vectormd} />
      <Image src={vector} alt="vector" className={styles.vector} />
    </div>
  );
}
