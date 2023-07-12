import { BeerType, BeerDataDTO } from '../../types';

export const beerDataMapper = (BeerDataDTO: BeerDataDTO[]) => {
  const beerCollection: BeerType[] = BeerDataDTO.map((beerData) => {
    return beerObjectMapper(beerData);
  });
  return beerCollection;
};

const beerObjectMapper = (BeerDataDTO: BeerDataDTO) => {
  return {
    id: BeerDataDTO.id,
    name: BeerDataDTO.name,
    tagline: BeerDataDTO.tagline,
    description: BeerDataDTO.description,
    abv: BeerDataDTO.abv,
    ibu: BeerDataDTO.ibu,
    ingredients: BeerDataDTO.ingredients,
    imageUrl: BeerDataDTO.image_url,
  };
};
