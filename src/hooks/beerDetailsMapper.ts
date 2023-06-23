import { beerDataDTO } from "../types";

export const beerDetailsMapper = (beerDataDTO: beerDataDTO[]) => {
  return beerObjectMapper(beerDataDTO[0]);
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
