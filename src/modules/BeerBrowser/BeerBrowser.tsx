import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BeerCard } from "./BeerCard";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import styles from "./beerBrowser.module.css";
import { beerDataMapper } from "./beerDataMapper";
import { BeerType } from "../../types";

export const BeerBrowser: FC = () => {
  const [beerData, setBeerData] = useState<BeerType[]>();
  useEffect(() => {
    httpClient.get("/beers").then((response: AxiosResponse) => {
      setBeerData(beerDataMapper(response.data));
    });
    console.log(beerData);
  }, []);
  return (
    <>
      <Container className={styles.beerCardsContainer}>
        {beerData?.map((beer) => {
          return <BeerCard name={beer.name} tagline={beer.tagline} image={beer.imageUrl} key={beer.id} />;
        })}
      </Container>
    </>
  );
};
