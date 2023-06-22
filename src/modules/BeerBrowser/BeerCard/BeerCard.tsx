import { FC } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./beerCard.module.css";

export const BeerCard: FC = () => {
  return (
    <Card className={styles.beerCard}>
      <Card.Img variant="top" src="https://picsum.photos/100/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button variant="secondary">details</Button>
      </Card.Body>
    </Card>
  );
};
