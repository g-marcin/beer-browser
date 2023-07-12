import { FC, useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Moon, Shuffle, Star, Sun } from 'react-feather';
import ReactFocusLock from 'react-focus-lock';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';
import styles from './customOffcanvas.module.css';

type CustomOffcanvasProps = {
  name: string;
  show: boolean;
  handleClose: () => void;
};

export const CustomOffcanvas: FC<CustomOffcanvasProps> = ({ show, handleClose, ...props }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const location = useLocation();


  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvas} {...props} placement={'end'}>
        <ReactFocusLock>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu:</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={styles['menu-item']}>
              Toggle page theme:
              {isDark ? (
                <button className={styles.button}>
                  <Sun size={36} onClick={() => setIsDark(isDark)} />
                </button>
              ) : (
                <button className={styles.button} onClick={() => setIsDark(isDark)}>
                  <Moon size={36} color="#000000" />
                </button>
              )}
            </div>
            <div className={styles['menu-item']}>
              Random beer:
              <Link
                to="/details/random"
                className={styles.button}
                onClick={() => {
                  if (location.pathname === '/details/random') {
                    window.location.reload();
                  }
                }}
              >
                <Shuffle size={36} />
              </Link>
            </div>
            <div className={styles['menu-item']}>
              Favorite beers:
              <button
                className={styles.button}
                onClick={() => {
                  if (location.pathname === '/details/random') {
                    window.location.reload();
                  }
                }}
              >
                <Star size={36} />
              </button>
            </div>
          </Offcanvas.Body>
        </ReactFocusLock>
      </Offcanvas>
    </>
  );
};
