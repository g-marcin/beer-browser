import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { httpClient } from '../common';
import { BeerType, BeerDataDTO } from '../types';
import { beerDetailsMapper } from './beerDetailsMapper';

export const useRandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState<BeerType>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    httpClient
      .get(`/beers/random`)
      .then((response: AxiosResponse<BeerDataDTO[]>) => {
        if (response.data) {
          setRandomBeer(beerDetailsMapper(response.data));
        } else {
          throw new Error('no details data received');
        }
      })
      .then(() => setIsLoading(false))
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);
  return { randomBeer: randomBeer, isLoading: isLoading };
};
