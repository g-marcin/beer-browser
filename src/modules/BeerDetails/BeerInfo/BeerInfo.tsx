import { FC } from 'react';
import { Card, Container } from 'react-bootstrap';
import { BeerType } from '../../../types';
import styles from './beerInfo.module.css';

type BeerInfoProps = {
  beerDetails: BeerType;
};

export const BeerInfo: FC<BeerInfoProps> = ({ beerDetails }) => {
  if (!beerDetails) {
    return;
  }
  return (
    <Container className={styles.detailsContainer}>
      <Card className={styles.beerCard}>
        <Card.Body className={styles.cardBody}>
          <Card.Title>
            <h1 className={styles.header}>{beerDetails.name}</h1>
          </Card.Title>
          <Card.Text>
            <h2 className={styles.subHeader}>{beerDetails.tagline}</h2>
          </Card.Text>
          <Card.Text>{beerDetails?.description}</Card.Text>
          <Card.Text className={styles['number-values-Wrapper']}>
            <div className={styles['number-value']}>
              <span> abv(alcohol by volume):</span>
              <span> {beerDetails?.abv} %</span>
            </div>
            <div className={styles['number-value']}>
              <span>ibu(international bitter units):</span>
              <span> {beerDetails?.ibu} ibu</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
