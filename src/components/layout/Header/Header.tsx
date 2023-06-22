import { FC, useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import beerIcon from "../../../assets/beer-icon.svg";

export const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <img src={beerIcon} alt="logo" className={styles.logoImage} />
          <span className="text-decoration-none">beer-browser</span>
        </Link>
        <button>
          <Menu className={styles.menu} />
        </button>
      </header>
    </>
  );
};
