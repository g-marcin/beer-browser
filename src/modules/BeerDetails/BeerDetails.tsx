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
    <Container className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className={styles.detailsContainer}>
          <Card className={styles.beerCard}>
            <Card.Img variant="top" src={beerDetails?.imageUrl} className={styles.detailsImage} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>
                {" "}
                <h1 className={styles.header}>{beerDetails?.name}</h1>{" "}
              </Card.Title>
              <Card.Text>
                {" "}
                <h2 className={styles.subHeader}>{beerDetails?.tagline}</h2>{" "}
              </Card.Text>
              <Card.Text>{beerDetails?.description}</Card.Text>
              <Card.Text>
                <label htmlFor="" className={styles.label}>
                  {"abv(alcohol by volume):"}
                  {beerDetails?.abv}
                </label>
                <label htmlFor="" className={styles.label}>
                  {"ibu(international bitter units):"}
                  {beerDetails?.ibu}
                </label>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
      <Container className={styles.detailsContainer}>
        <Card className={styles.ingredientsCard}>
          <Card.Body className={styles.cardBody}>
            <Card.Title>
              {" "}
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

              <h3 className={styles.categoryHeader}>{"--Start:"}</h3>
              {beerDetails?.ingredients.hops.filter((hop) => hop.add === "start").length !== 0 ? (
                beerDetails?.ingredients.hops
                  .filter((hop) => hop.add === "start")
                  .map((hop) => {
                    return (
                      <>
                        <div className={styles.ingredient}>
                          <div>{hop.name}</div>
                          <div>
                            {hop.amount.value} {hop.amount.unit}
                          </div>
                        </div>
                      </>
                    );
                  })
              ) : (
                <div>no start hops</div>
              )}
              <h3 className={styles.categoryHeader}>{"--Middle:"}</h3>
              {beerDetails?.ingredients.hops.filter((hop) => hop.add === "middle").length !== 0 ? (
                beerDetails?.ingredients.hops
                  .filter((hop) => hop.add === "middle")
                  .map((hop) => {
                    return (
                      <>
                        <div className={styles.ingredient}>
                          <div>{hop.name}</div>
                          <div>
                            {hop.amount.value} {hop.amount.unit}
                          </div>
                        </div>
                      </>
                    );
                  })
              ) : (
                <div>no middle hops</div>
              )}
              <h3 className={styles.categoryHeader}>{"--End:"}</h3>
              {beerDetails?.ingredients.hops.filter((hop) => hop.add === "end").length !== 0 ? (
                beerDetails?.ingredients.hops
                  .filter((hop) => hop.add === "end")
                  .map((hop) => {
                    return (
                      <>
                        <div className={styles.ingredient}>
                          <div>{hop.name}</div>
                          <div>
                            {hop.amount.value} {hop.amount.unit}
                          </div>
                        </div>
                      </>
                    );
                  })
              ) : (
                <div>no end hops</div>
              )}
            </Card.Text>
            <h2 className={styles.subHeader}>Yeast:</h2>
            <Card.Text>{beerDetails?.ingredients.yeast}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};
