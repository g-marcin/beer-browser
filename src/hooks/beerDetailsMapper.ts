import { BeerType, beerDataDTO } from "../types";

export const beerDetailsMapper = (beerDataDTO: beerDataDTO[]) => {
  const beerDetails: BeerType[] = [];
  beerDataDTO.map((beer) => {
    beerDetails.push({
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      abv: beer.abv,
      ibu: beer.ibu,
      ingredients: beer.ingredients,
      imageUrl: beer.image_url,
    });
  });
  return beerDetails[0];
};
