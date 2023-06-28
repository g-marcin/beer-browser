import { FC } from 'react';
import { Loader } from '../../components';
import { AsyncImage } from '../../components/AsyncImage';
import { BeerShadow } from '../../components/BeerShadow';
import { BeerInfo } from './BeerInfo';
import { IngredientsInfo } from './IngredientsInfo';

import styles from './beerDetails.module.css';
import { useRandomBeer } from '../../hooks/useRandomBeer';

const RandomBeerDetails: FC = () => {
  const { randomBeer: beerDetails, isLoading } = useRandomBeer();

  if (!beerDetails) {
    return;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles['wrapper']}>
          <BeerInfo beerDetails={beerDetails} />
          <div className={styles['image-wrapper']}>
            <AsyncImage src={beerDetails.imageUrl} alt="beer-image" className={styles.detailsImage} />
            <BeerShadow variant="details" />
          </div>
          <IngredientsInfo beerDetails={beerDetails} />
        </div>
      )}
    </>
  );
};

export default RandomBeerDetails;
