import { useEffect, useState } from "react";
import { httpClient } from "../common";
import { AxiosResponse } from "axios";
import { BeerType } from "../types";
import { beerDetailsMapper } from "./beerDetailsMapper";

export const useBeerDetails = (id = "1") => {
  const [beerDetails, setBeerDetails] = useState<BeerType>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    httpClient
      .get(`/beers?ids=${id}`)
      .then((response: AxiosResponse) => {
        if (response.data) {
          setBeerDetails(beerDetailsMapper(response.data));
        }
      })
      .then(() => setIsLoading(false));
    console.log(beerDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { beerDetails: beerDetails, isLoading: isLoading };
};
