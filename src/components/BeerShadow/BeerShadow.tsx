import { FC, useContext } from 'react';
import { ThemeContext } from '../../contexts';
import styles from './beerShadow.module.css';

type BeerShadowProps = {
  variant: string;
};

export const BeerShadow: FC<BeerShadowProps> = ({ variant }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={styles.flex}>
      <div className={isDark ? styles[`${variant}-shadow-dark`] : styles[`${variant}-shadow-light`]}></div>
    </div>
  );
};
