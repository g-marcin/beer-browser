import { FC, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'react-feather';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { AsyncImage } from '../../components/AsyncImage';
import { BeerShadow } from '../../components/BeerShadow';
import { useBeerDetails } from '../../hooks/useBeerDetails';
import { ErrorPage } from '../../router/ErrorPage';
import { BeerInfo } from './BeerInfo';
import { IngredientsInfo } from './IngredientsInfo';
import styles from './beerDetails.module.css';

const BeerDetails: FC = () => {
  const { id } = useParams();
  const { beerDetails, isLoading } = useBeerDetails(id);
  const[isFavourite,setIsFavourite]= useState<boolean>(false)

useEffect(()=>{
const favouriteBeers = window.localStorage.getItem("beerFavourites")?.split(",")
if(!id){
  return
}
if(!favouriteBeers){
  return
}
setIsFavourite(favouriteBeers?.includes(id))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

  if (!beerDetails) {
    return <ErrorPage errorMessage="no beer details" />;
  }
  if (!id) {
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
            {<Star fill={`${isFavourite? 'gold':''}`}/>}
            <AsyncImage src={beerDetails.imageUrl} alt="beer-image" className={styles.detailsImage} />
            <BeerShadow variant="details" />
            <div className={styles['navigation-wrapper']}>
              <Link to={`/details/${parseInt(id) === 1 ? id : parseInt(id) - 1}`}>
                <ArrowLeft size={36} />
              </Link>
              <Link to={`/details/${parseInt(id) + 1}`}>
                <ArrowRight size={36} />
              </Link>
            </div>
          </div>
          <IngredientsInfo beerDetails={beerDetails} />
        </div>
      )}
    </>
  );
};

export default BeerDetails;
