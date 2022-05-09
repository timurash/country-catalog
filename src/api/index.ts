import CountryModel from '../models/CountryModel/CountryModel';

const allCountriesQueryFields = [
  'name',
  'capital',
  'currencies',
  'languages',
  'flags',
];

const countriesByNameQueryFields = [
  'name',
  'capital',
  'currencies',
  'languages',
  'population',
  'flags',
];

export async function getAllCountries(): Promise<Array<CountryModel>> {
  const url = new URL('https://restcountries.com/v3.1/all');
  url.searchParams.append('fields', allCountriesQueryFields.join(','));

  return fetch(url.toString())
    .then((response) => response.json()) as Promise<Array<CountryModel>>;
}

export async function getCountriesByName(searchText: string):
Promise<Array<CountryModel>> {
  const url = new URL(`https://restcountries.com/v3.1/name/${searchText}`);
  url.searchParams.append('fields', countriesByNameQueryFields.join(','));

  return fetch(url.toString())
    .then((response) => response.json()) as Promise<Array<CountryModel>>;
}

export default { getAllCountries, getCountriesByName };
