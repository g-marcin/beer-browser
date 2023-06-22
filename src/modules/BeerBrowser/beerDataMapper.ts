import { BeerType, beerDataDTO } from "../../types";

export const beerDataMapper = (beerDataDTO: beerDataDTO[]) => {
  const beerCollection: BeerType[] = [];
  beerDataDTO.map((beerData) => {
    beerCollection.push({
      id: beerData.id,
      name: beerData.name,
      tagline: beerData.tagline,
      description: beerData.description,
      abv: beerData.abv,
      ibu: beerData.ibu,
      ingredients: beerData.ingredients,
      imageUrl: beerData.image_url,
    });
  });

  return beerCollection;
};
