import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AsyncImage } from '../../../components/AsyncImage';
import { BeerShadow } from '../../../components/BeerShadow';
import styles from './beerCard.module.css';

type BeerCardProps = {
  image: string;
  name: string;
  tagline: string;
  id: number;
};

export const BeerCard: FC<BeerCardProps> = ({ image, name, tagline, id }) => {
  const navigate = useNavigate();
  const beerCardHandler = (id: number) => {
    navigate(`/details/${id}`);
  };
  return (
    <Card className={styles.beerCard} onClick={() => beerCardHandler(id)}>
      <div className={styles['image-wrapper']}>
        <AsyncImage src={image} alt="bottle image" className={styles.cardImage} />
        <BeerShadow variant="card" />
      </div>

      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{tagline}</Card.Text>
      </Card.Body>
    </Card>
  );
};
