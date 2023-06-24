import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './beerCard.module.css';

type BeerCardProps = {
  image?: string;
  name?: string;
  tagline?: string;
  id: number;
};

export const BeerCard: FC<BeerCardProps> = ({
  image = '',
  name = '',
  tagline = '',
  id,
}) => {
  const navigate = useNavigate();
  const beerCardHandler = (id: number) => {
    navigate(`/details/${id}`);
  };
  return (
    <Card className={styles.beerCard} onClick={() => beerCardHandler(id)}>
      <Card.Img variant="top" src={image} className={styles.cardImage} />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{tagline}</Card.Text>
      </Card.Body>
    </Card>
  );
};
