import { FC } from 'react';
import { Card, Container } from 'react-bootstrap';
import { BeerType } from '../../../types';
import styles from './beerInfo.module.css';

type BeerInfoProps = {
  beerDetails: BeerType;
};

export const BeerInfo: FC<BeerInfoProps> = ({ beerDetails }) => {
  if (!beerDetails) {
    throw new Error('no beer details');
  }
  return (
    <Container className={styles.detailsContainer}>
      <Card className={styles.beerCard}>
        <Card.Body className={styles.cardBody}>
          <Card.Title>
            <h1 className={styles.header}>{beerDetails.name}</h1>
          </Card.Title>
          <h2 className={styles.subHeader}>{beerDetails.tagline}</h2>
          <p data-testid="beer-description">{beerDetails.description}</p>
          <div className={styles['number-values-Wrapper']}>
            <div className={styles['number-value']}>
              <span> abv(alcohol by volume):</span>
              <span> {beerDetails?.abv} %</span>
            </div>
            <div className={styles['number-value']}>
              <span>ibu(international bitter units):</span>
              <span> {beerDetails?.ibu} ibu</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
