import React, { useState } from "react";
import styles from "../../styles/Navigations.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/brand/logo.svg";
import Ripples from "react-ripples";
import IconProvider from "@/utils/icons/IconProvider";
import { RiHome2Fill } from "react-icons/ri";
import {TbPlaylist} from 'react-icons/tb'
import { IoMdRadio } from "react-icons/io";
import { FaFilm } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Navlink from "./Navlinks";
import SearchBar from "../TinyComp/Searchbar/SearchBar";

export default function Navber() {
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState(false);

  const navlinks = [
    {
      key: 1,
      icon: <RiHome2Fill />,
      text: "Home",
      href: "/",
    },
    {
      key: 2,
      icon: <TbPlaylist />,
      text: "My collections",
      href: "/collections",
    },
    {
      key: 3,
      icon: <IoMdRadio />,
      text: "Radio",
      href: "/radio",
    },
    {
      key: 4,
      icon: <FaFilm />,
      text: "Music videos",
      href: "/videos",
    },
    {
      key: 5,
      icon: <BsFillPersonFill />,
      text: "Profile",
      href: "/profile",
    },
    {
      key: 6,
      icon: <HiOutlineLogout />,
      text: "Log out",
      href: "/videos",
    },
  ];

  const classes = {};

  return (
    <div className="relative lg:hidden">
      <IconProvider color="#ffffff66" size="25px">
        <nav className={styles.navbar}>
          <div className={styles.icons}>
            <Ripples>
              <RxHamburgerMenu
                onClick={() => {
                  setShowNav(!showNav);
                  setSearch(false);
                }}
              />
            </Ripples>
            <Logo />
          </div>
          <div className={styles["nav-search"]}>
            <Ripples>
              <FiSearch
                onClick={() => {
                  setSearch(!search);
                  setShowNav(false);
                }}
              />
            </Ripples>
          </div>
        </nav>
      </IconProvider>

      {showNav && (
        <nav className="absolute h-[60vh] top-[4em] left-0 z-10 w-full py-[3em] backdrop-blur-lg bg-[#24282944] rounded-lg ">
          <IconProvider size="20px" color="#ffffff4d">
            {/* navlinks  */}
            <div className=" space-y-[2em] w-[70%] mx-auto ">
              {navlinks.map((nav) => {
                return (
                  <Navlink
                    key={nav.key}
                    icon={nav.icon}
                    text={nav.text}
                    href={nav.href}
                  />
                );
              })}
            </div>
          </IconProvider>
        </nav>
      )}

      {search && (
        <div className="w-[95%] mx-auto">
          <SearchBar border type="search" placeholder="search a song" />
        </div>
      )}
    </div>
  );
}
