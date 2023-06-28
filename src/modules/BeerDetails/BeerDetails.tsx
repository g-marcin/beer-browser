import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from '../../components';
import { AsyncImage } from '../../components/AsyncImage';
import { BeerShadow } from '../../components/BeerShadow';
import { useBeerDetails } from '../../hooks/useBeerDetails';
import { BeerInfo } from './BeerInfo';
import { IngredientsInfo } from './IngredientsInfo';
import { ErrorPage } from '../../router/ErrorPage';
import styles from './beerDetails.module.css';
import { ArrowLeft, ArrowRight } from 'react-feather';

const BeerDetails: FC = () => {
  const { id } = useParams();
  const { beerDetails, isLoading } = useBeerDetails(id);
  const navigate = useNavigate();

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
            <div className={styles['navigation-wrapper']}>
              <button
                onClick={() => {
                  if (!id) {
                    return;
                  }
                  if (parseInt(id) === 1) {
                    return;
                  }
                  navigate(`/details/${parseInt(id) - 1}`);
                }}
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => {
                  if (!id) {
                    return;
                  }
                  navigate(`/details/${parseInt(id) + 1}`);
                }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <IngredientsInfo beerDetails={beerDetails} />
        </div>
      )}
    </>
  );
};

export default BeerDetails;
