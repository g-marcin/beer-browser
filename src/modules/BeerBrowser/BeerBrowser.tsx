import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BeerCard } from "./BeerCard";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import styles from "./beerBrowser.module.css";

export const BeerBrowser: FC = () => {
  const [beerData, setBeerData] = useState("");
  useEffect(() => {
    httpClient.get("/beers").then((response: AxiosResponse) => {
      setBeerData(response.data);
    });
    console.log(beerData);
  }, []);
  return (
    <>
      <Container className={styles.beerCardsContainer}>
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
      </Container>
    </>
  );
};
