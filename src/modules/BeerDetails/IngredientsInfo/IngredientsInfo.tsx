import { FC, useMemo } from 'react';
import { Card, Container } from 'react-bootstrap';
import { BeerType } from '../../../types';
import { HopsGroup } from './Hops';
import styles from './ingredientsInfo.module.css';

type IngredientsInfoProps = {
  beerDetails: BeerType;
};

export const IngredientsInfo: FC<IngredientsInfoProps> = ({ beerDetails }) => {
  const hopsStart = useMemo(() => {
    return beerDetails?.ingredients.hops.filter((hop) => hop.add === 'start') || [];
  }, [beerDetails]);
  const hopsMiddle = useMemo(() => {
    return beerDetails?.ingredients.hops.filter((hop) => hop.add == 'middle') || [];
  }, [beerDetails]);
  const hopsEnd = useMemo(() => {
    return beerDetails?.ingredients.hops.filter((hop) => hop.add === 'end') || [];
  }, [beerDetails]);

  if (!beerDetails) {
    return;
  }

  return (
    <Container className={styles.detailsContainer}>
      <Card className={styles.ingredientsCard}>
        <Card.Body className={styles.cardBody}>
          <Card.Title>
            <h1 className={styles.header}>Ingredients:</h1>
          </Card.Title>

          <h2 className={styles.subHeader}>Malts:</h2>
          {beerDetails?.ingredients.malt.map((malt, index) => {
            return (
              <div className={styles.ingredient} key={index}>
                <div>{malt.name}</div>
                <div>
                  {malt.amount.value} {malt.amount.unit}
                </div>
              </div>
            );
          })}

          <h2 className={styles.subHeader}>Hops:</h2>
          <HopsGroup title={'--Start'} hops={hopsStart} />
          <HopsGroup title={'--Middle'} hops={hopsMiddle} />
          <HopsGroup title={'--End'} hops={hopsEnd} />

          <h2 className={styles.subHeader}>Yeast:</h2>
          <div className={styles.ingredient}>{beerDetails?.ingredients.yeast}</div>
        </Card.Body>
      </Card>
    </Container>
  );
};
