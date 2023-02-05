import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header-text"]}>
        <p>Current playlist</p>
        <div>
          <h1>R & B Hits</h1>
          <p>
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
          <div className={styles.info}>
            {/* <Image src={} alt="profile" /> */}
            <div className={styles["header-likes"]}>
              love
              <div> 33k Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
