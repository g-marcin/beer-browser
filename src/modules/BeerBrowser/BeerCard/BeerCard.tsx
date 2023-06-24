import { FC, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';
import styles from './beerCard.module.css';

type BeerCardProps = {
  image?: string;
  name?: string;
  tagline?: string;
  id: number;
};

export const BeerCard: FC<BeerCardProps> = ({ image, name, tagline, id }) => {
  const navigate = useNavigate();
  const beerCardHandler = (id: number) => {
    navigate(`/details/${id}`);
  };
  const {isDark} = useContext(ThemeContext)
  return (
    <Card className={styles.beerCard} onClick={() => beerCardHandler(id)}>
      <div className={styles["image-wrapper"]}>
      <Card.Img variant="top" src={image} className={styles.cardImage} />
<div className={isDark? styles["image-shadow-dark"]:styles["image-shadow-light"]}></div>
      </div>
      
      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{tagline}</Card.Text>
      </Card.Body>
    </Card>
  );
};
