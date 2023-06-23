import { AxiosResponse } from 'axios';
import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { httpClient } from '../../common';
import { Loader } from '../../components';
import { CustomPagination } from '../../components/CustomPagination';
import { BeerType, beerDataDTO } from '../../types';
import { BeerCard } from './BeerCard';
import styles from './beerBrowser.module.css';
import { beerDataMapper } from './beerDataMapper';

export const BeerBrowser: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const setPageHandler = (page: number) => {
    setPage(page);
  };

  const [beerData, setBeerData] = useState<BeerType[]>();
  useEffect(() => {
    setIsLoading(true);
    httpClient
      .get(`/beers?page=${page}&per_page=9`)
      .then((response: AxiosResponse<beerDataDTO[]>) => {
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
                <BeerCard name={beer.name} tagline={beer.tagline} image={beer.imageUrl} id={beer.id} key={beer.id} />
              );
            })}
          </Container>
          <CustomPagination page={page} setPageHandler={setPageHandler} />
        </div>
      )}
    </>
  );
};
