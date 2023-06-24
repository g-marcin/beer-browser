import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { httpClient } from '../common';
import { BeerType, beerDataDTO } from '../types';
import { beerDetailsMapper } from './beerDetailsMapper';

export const useBeerDetails = (id:string|undefined) => {
  const [beerDetails, setBeerDetails] = useState<BeerType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    httpClient
      .get(`/beers?ids=${id?id:""}`)
      .then((response: AxiosResponse<beerDataDTO[]>) => {
        if (response.data) {
          setBeerDetails(beerDetailsMapper(response.data));
        }else{
          throw new Error("no details data recieved")
        }
        setIsLoading(false)
      })
      .catch(() => {
        return;
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return { beerDetails: beerDetails, isLoading: isLoading };
};
