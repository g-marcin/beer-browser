import { FC, useState } from 'react';
import { Menu } from 'react-feather';
import { Link } from 'react-router-dom';
import beerIcon from '../../../assets/beer-icon.svg';
import { CustomOffcanvas } from '../CustomOffcanvas';
import styles from './header.module.css';

export const Header: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <img src={beerIcon} alt="logo" className={styles.logoImage} />
          <span className="text-decoration-none">beer-browser</span>
        </Link>
        <button className={styles.menuButton} onClick={handleShow}>
          <Menu className={styles.menu} color="#ffffff" />
        </button>
      </header>
        <CustomOffcanvas name={'hamburger-menu'} show={show} handleClose={handleClose} handleShow={handleShow} />
    </>
  );
};
