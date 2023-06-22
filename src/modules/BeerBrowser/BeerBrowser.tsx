import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BeerCard } from "./BeerCard";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import styles from "./beerBrowser.module.css";
import { beerDataMapper } from "./beerDataMapper";
import { BeerType } from "../../types";
import { CustomPagination } from "../../components/CustomPagination";

export const BeerBrowser: FC = () => {
  const [page, setPage] = useState(1);
  const setPageHandler = (page: number) => {
    setPage(page);
  };

  const [beerData, setBeerData] = useState<BeerType[]>();
  useEffect(() => {
    httpClient.get(`/beers?page=${page}&per_page=9`).then((response: AxiosResponse) => {
      setBeerData(beerDataMapper(response.data));
    });
  }, [page]);

  return (
    <>
      <div>
        <Container className={styles.beerCardsContainer}>
          {beerData?.map((beer) => {
            return <BeerCard name={beer.name} tagline={beer.tagline} image={beer.imageUrl} key={beer.id} />;
          })}
        </Container>
        <CustomPagination page={page} setPageHandler={setPageHandler} />
      </div>
    </>
  );
};
