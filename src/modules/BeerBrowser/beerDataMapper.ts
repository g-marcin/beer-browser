import { BeerType, beerDataDTO } from '../../types';

export const beerDataMapper = (beerDataDTO: beerDataDTO[]) => {
  const beerCollection: BeerType[] = beerDataDTO.map((beerData) => {
    return beerObjectMapper(beerData);
  });
  return beerCollection;
};

const beerObjectMapper = (beerDataDTO: beerDataDTO) => {
  return {
    id: beerDataDTO.id,
    name: beerDataDTO.name,
    tagline: beerDataDTO.tagline,
    description: beerDataDTO.description,
    abv: beerDataDTO.abv,
    ibu: beerDataDTO.ibu,
    ingredients: beerDataDTO.ingredients,
    imageUrl: beerDataDTO.image_url,
  };
};
