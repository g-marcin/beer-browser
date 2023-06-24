import { FC } from 'react';
import { HopType } from '../../../../types';
import styles from './hopsGroup.module.css';

type HopsGroupProps = {
  title: string;
  hops: HopType[];
};

export const HopsGroup: FC<HopsGroupProps> = ({ title, hops }) => {
  return (
    <>
      <h3 className={styles.categoryHeader}>{title}</h3>
      {hops.length !== 0 ? (
        hops.map((hop: HopType,index) => {
          return (       
              <div className={styles.ingredient} key={index}>
                <div>{hop.name}</div>
                <div>
                  {hop.amount.value} {hop.amount.unit}
                </div>
              </div>
          );
        })
      ) : (
        <div>No{title} hops</div>
      )}
    </>
  );
};
