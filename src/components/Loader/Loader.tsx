import { FC, useEffect, useState } from 'react';
import { Loader as LoaderIcon } from 'react-feather';
import styles from './loader.module.css';

export const Loader: FC = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsTimeout(true), 4000);
  }, []);

  return (
    <div className={styles.animationContainer}>
      {isTimeout ? <div>No data available</div> : <LoaderIcon className={styles.rotate} size={64} />}
    </div>
  );
};
