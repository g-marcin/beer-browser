import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { useBeerDetails } from '../../hooks/useBeerDetails';
import { BeerInfo } from './BeerInfo';
import { IngredientsInfo } from './IngredientsInfo';
import styles from './beerDetails.module.css';

const BeerDetails: FC = () => {
  const { id} = useParams();
  const { beerDetails, isLoading } = useBeerDetails(id);

  if (!beerDetails) {
    return;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.wrapper} `}>
       <div className={styles["flex-column"]}>
          <BeerInfo beerDetails={beerDetails} />
          
          </div>
          <Card.Img variant="top" src={beerDetails?.imageUrl} className={styles.detailsImage} />
          <IngredientsInfo beerDetails={beerDetails} />
        </div>
      )}
    </>
  );
};

export default BeerDetails;
