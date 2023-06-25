import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { mockBeer } from '../mocks';
import { BeerInfo } from '../modules/BeerDetails/BeerInfo';

test('vitest environment works', () => {
  expect(2).toEqual(2);
});

test('beer description renders', async () => {
  const beerDetails = mockBeer;
  if (!beerDetails) {
    return;
  }
  const beerInfo = render(<BeerInfo beerDetails={beerDetails} />);
  const beerDescription = await beerInfo.findByTestId('beer-description');
  expect(beerDescription).toBeDefined();
});
