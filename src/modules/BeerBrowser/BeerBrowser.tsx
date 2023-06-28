import { AxiosResponse } from 'axios';
import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { httpClient } from '../../common';
import { CustomPagination, Loader } from '../../components';
import { BeerType, BeerDataDTO } from '../../types';
import { BeerCard } from './BeerCard';
import { beerDataMapper } from './beerDataMapper';
import styles from './beerBrowser.module.css';

const BeerBrowser: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number | undefined>();
  const setPageHandler = (page: number) => {
    setPage(page);
  };

  const [beerData, setBeerData] = useState<BeerType[]>();
  useEffect(() => {
    setIsLoading(true);
    httpClient
      .get(`/beers?page=${page || 1}&per_page=9`)
      .then((response: AxiosResponse<BeerDataDTO[]>) => {
        setBeerData(beerDataMapper(response.data));
      })
      .then(() => setIsLoading(false))
      .catch(() => {
        return;
      });
  }, [page]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Container className={styles.beerCardsContainer}>
            {beerData?.map((beer) => {
              return (
                <BeerCard
                  name={beer.name}
                  tagline={beer.tagline}
                  image={beer.imageUrl}
                  id={beer.id}
                  key={beer.id}
                  isLoading={isLoading}
                />
              );
            })}
          </Container>
          <CustomPagination page={page || 1} setPageHandler={setPageHandler} />
        </div>
      )}
    </>
  );
};

export default BeerBrowser;
