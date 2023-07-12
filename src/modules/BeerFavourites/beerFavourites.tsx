import { AxiosResponse } from 'axios';
import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { httpClient } from '../../common';
import { BeerCard, CustomPagination, Loader } from '../../components';
import { BeerDataDTO, BeerType } from '../../types';
import { beerDataMapper } from './beerDataMapper';
import styles from './beerFavourites.module.css';



const BeerFavourites: FC = () => {
  const [page, setPage] = useState<number | undefined>(1);
  const setPageHandler = (page: number) => {
    setPage(page);
  };

const[beerFavourites, setBeerFavourites] =useState<number[]>()
useEffect(()=>{
  const storedFavourites= window.localStorage.getItem("beerFavourites")||"1,2,3"; 
  const parsedFavourites = storedFavourites.split(",").map((id)=>parseInt(id))||[]
setBeerFavourites(parsedFavourites)
console.log(parsedFavourites);

},[])

  const [beerData, setBeerData] = useState<BeerType[]>();
  useEffect(() => {
    if(!beerFavourites){
      return
    }
    setIsLoading(true);
    httpClient
      .get(`/beers?ids=${beerFavourites.join("|")}`)
      .then((response: AxiosResponse<BeerDataDTO[]>) => {
        setBeerData(beerDataMapper(response.data));
      })
      .then(() => setIsLoading(false))
      .catch((error: Error) => {
        console.log(error);
      });
  }, [beerFavourites]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Container className={styles.beerCardsContainer}>
            {beerData?.filter((beer)=>beerFavourites?.includes(beer.id)).map((beer) => {
           
              return <BeerCard name={beer.name} tagline={beer.tagline} image={beer.imageUrl} id={beer.id} key={beer.id} />;
            })}
          </Container>
          <CustomPagination page={page || 1} setPageHandler={setPageHandler} />
        </div>
      )}
    </>
  );
};

export default BeerFavourites;
