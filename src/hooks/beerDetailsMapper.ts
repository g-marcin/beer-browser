import { BeerDataDTO } from '../types';

export const beerDetailsMapper = (BeerDataDTO: BeerDataDTO[]) => {
  return beerObjectMapper(BeerDataDTO[0]);
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
