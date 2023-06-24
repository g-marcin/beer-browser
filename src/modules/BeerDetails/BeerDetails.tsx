import { FC, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { ThemeContext } from '../../contexts';
import { useBeerDetails } from '../../hooks/useBeerDetails';
import { BeerInfo } from './BeerInfo';
import { IngredientsInfo } from './IngredientsInfo';
import styles from './beerDetails.module.css';

const BeerDetails: FC = () => {
  const { id} = useParams();
  const { beerDetails, isLoading } = useBeerDetails(id);
  const{isDark} = useContext(ThemeContext)

  if (!beerDetails) {
    return;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.wrapper} `}>
     
          <BeerInfo beerDetails={beerDetails} />
          
         
          <div className={styles["image-wrapper"]}>
          <Card.Img variant="top" src={beerDetails?.imageUrl} className={styles.detailsImage} />
<div className={isDark? styles["image-shadow-dark"]:styles["image-shadow-light"]}></div>
          </div>
          <IngredientsInfo beerDetails={beerDetails} />
        </div>
      )}
    </>
  );
};

export default BeerDetails;
