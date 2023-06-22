import { FC } from "react";
import { Card, Container } from "react-bootstrap";
import { useBeerDetails } from "../../hooks/useBeerDetails";
import { Loader } from "../../components";
import styles from "./beerDetails.module.css";
import { useParams } from "react-router-dom";

export const BeerDetails: FC = () => {
  const { id } = useParams();
  const { beerDetails, isLoading } = useBeerDetails(id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className={styles.detailsContainer}>
          <Card className={styles.beerCard}>
            <Card.Img variant="top" src={beerDetails?.imageUrl} className={styles.cardImage} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>{beerDetails?.name}</Card.Title>
              <Card.Text>{beerDetails?.tagline}</Card.Text>
              <Card.Text>{beerDetails?.description}</Card.Text>
              <Card.Text>{beerDetails?.abv}</Card.Text>
              <Card.Text>{beerDetails?.ibu}</Card.Text>
              <Card.Text>{JSON.stringify(beerDetails?.ingredients)}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};
