import { render, screen } from '@testing-library/vue';
import CountryCard
  from '../../../../components/CountryCatalog/Cards/CountryCard.vue';
import { getLanguagesCaption, getCurrenciesCaption } from '../../../../utils';
import countrySample from '../../../mocks/countrySample';

test('Check is values correctly displayed', async () => {
  const { getByText } = render(CountryCard, {
    props: {
      country: countrySample,
    },
  });

  const nameNode = await screen.findByText(countrySample.name.common);
  expect(nameNode.innerHTML).toBe(countrySample.name.common);

  getByText(getLanguagesCaption(countrySample));
  getByText(getCurrenciesCaption(countrySample));
});
