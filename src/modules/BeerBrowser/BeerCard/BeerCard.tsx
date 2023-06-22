import { FC } from "react";
import { Card } from "react-bootstrap";
import styles from "./beerCard.module.css";

type BeerCardProps = {
  image?: string;
  name?: string;
  tagline?: string;
};

export const BeerCard: FC<BeerCardProps> = ({
  image = "https://picsum.photos/100/100",
  name = "beer name",
  tagline = "beer tagline",
}) => {
  return (
    <Card className={styles.beerCard}>
      <Card.Img variant="top" src={image} className={styles.cardImage} />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{tagline}</Card.Text>
      </Card.Body>
    </Card>
  );
};
