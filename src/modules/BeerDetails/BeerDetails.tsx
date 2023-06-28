import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { AsyncImage } from '../../components/AsyncImage';
import { BeerShadow } from '../../components/BeerShadow';
import { useBeerDetails } from '../../hooks/useBeerDetails';
import { BeerInfo } from './BeerInfo';
import { IngredientsInfo } from './IngredientsInfo';
import { ErrorPage } from '../../router/ErrorPage';
import styles from './beerDetails.module.css';

const BeerDetails: FC = () => {
  const { id } = useParams();
  const { beerDetails, isLoading } = useBeerDetails(id);

  if (!beerDetails) {
    return <ErrorPage errorMessage="no beer details" />;
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

export default BeerDetails;
