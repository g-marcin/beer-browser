import { FC, useMemo } from "react";
import { Card, Container } from "react-bootstrap";
import { BeerType } from "../../../types";
import styles from "./ingredientsInfo.module.css";
import { HopsGroup } from "./Hops";

type IngredientsInfoProps = {
  beerDetails: BeerType;
};

export const IngredientsInfo: FC<IngredientsInfoProps> = ({ beerDetails }) => {
  const hopsStart = useMemo(() => {
    return beerDetails?.ingredients.hops.filter((hop) => hop.add === "start") || [];
  }, [beerDetails]);
  const hopsMiddle = useMemo(() => {
    return beerDetails?.ingredients.hops.filter((hop) => hop.add === "middle") || [];
  }, [beerDetails]);
  const hopsEnd = useMemo(() => {
    return beerDetails?.ingredients.hops.filter((hop) => hop.add === "end") || [];
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
          <Card.Text>
            <h2 className={styles.subHeader}>Malts:</h2>
            {beerDetails?.ingredients.malt.map((malt) => {
              return (
                <div className={styles.ingredient}>
                  <div>{malt.name}</div>
                  <div>
                    {malt.amount.value} {malt.amount.unit}
                  </div>
                </div>
              );
            })}
          </Card.Text>
          <Card.Text>
            <h2 className={styles.subHeader}>Hops:</h2>
            <HopsGroup title={"--Start"} hops={hopsStart} />
            <HopsGroup title={"--Middle"} hops={hopsMiddle} />
            <HopsGroup title={"--End"} hops={hopsEnd} />
          </Card.Text>
          <h2 className={styles.subHeader}>Yeast:</h2>
          <Card.Text className={styles.ingredient}>{beerDetails?.ingredients.yeast}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
