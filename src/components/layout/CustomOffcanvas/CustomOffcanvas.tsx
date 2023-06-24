import { FC, useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Moon, Sun } from 'react-feather';
import ReactFocusLock from 'react-focus-lock';
import { ThemeContext } from '../../../contexts';
import styles from './customOffcanvas.module.css';

type CustomOffcanvasProps = {
  name: string;
  show: boolean;
  handleShow: () => void;
  handleClose: () => void;
};

export const CustomOffcanvas: FC<CustomOffcanvasProps> = ({ show, handleShow, handleClose, ...props }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <>
        <ReactFocusLock>
      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvas} {...props} placement={'end'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu:</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={styles["menu-item"]}>
              Toggle page theme:
               {isDark ? (
              <button className={styles.button}>
                <Sun size={36} onClick={() => setIsDark(isDark)} />
              </button>
            ) : (
              <button className={styles.button} onClick={() => setIsDark(isDark)}>
                <Moon size={36} color='#000000' />
              </button>
            )}
            </div>     
          </Offcanvas.Body>
      </Offcanvas>
        </ReactFocusLock>
    </>
  );
};
