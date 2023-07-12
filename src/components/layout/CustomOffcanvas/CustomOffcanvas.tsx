import { FC, useContext } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
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
          <Offcanvas.Body className={styles['offcanvas-body']}>
           
            <Button className={styles['menu-item']}  onClick={() =>{ setIsDark(isDark);  }}>
              <span className={styles['item-typography']}>  Page theme:</span>
              {isDark ? (     
                  <Sun size={36} className={styles.icon} />            
              ) : (
                  <Moon size={36} className={styles.icon} />
              )}
            </Button>
           
            
              <Link
                to="/details/random"
                className={styles['menu-item']}
                onClick={() => {
                  if (location.pathname === '/details/random') {
                    window.location.reload();
                  }
                  handleClose()
                }}
              >
                <span className={styles['item-typography']}>Random beer:</span>
                <Shuffle size={36} className={styles.icon} />
              </Link>
              <Link
                to="/details/random"
                className={styles['menu-item']}
                onClick={() => {
                  if (location.pathname === '/details/random') {
                    window.location.reload();
                  }
                   handleClose()
                }}
              >
                <span className={styles['item-typography']}>Favorites:</span>
                <Star size={36}className={styles.icon}/>
              </Link>
            
         
          </Offcanvas.Body>
        </ReactFocusLock>
      </Offcanvas>
    </>
  );
};
