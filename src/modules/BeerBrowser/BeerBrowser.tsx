import { FC } from "react";
import { Container } from "react-bootstrap";
import { BeerCard } from "./BeerCard";
import styles from "./beerBrowser.module.css";

export const BeerBrowser: FC = () => {
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
