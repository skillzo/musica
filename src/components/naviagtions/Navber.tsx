import React from "react";
import styles from "../../styles/Navigations.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/brand/logo.svg";
import Image from "next/image";
import IconProvider from "@/utils/icons/IconProvider";

export default function Navber() {
  return (
    <IconProvider color="#ffffff66" size="25px">
      <nav className={styles.navbar}>
        <div className={styles.icons}>
          <RxHamburgerMenu />
          <Image src={Logo} alt="musica-logo" />
        </div>
        <div className={styles["nav-search"]}>
          <FiSearch />
        </div>
      </nav>
    </IconProvider>
  );
}
