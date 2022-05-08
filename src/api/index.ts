import CountryModel from '../models/CountryModel/CountryModel';

export async function getAllCountries(): Promise<Array<CountryModel>> {
  return fetch('https://restcountries.com/v3.1/name/rus')
    .then((response) => response.json()) as Promise<Array<CountryModel>>;
}

export async function getCountriesByName(searchText: string):
Promise<Array<CountryModel>> {
  return fetch(`https://restcountries.com/v3.1/name/${searchText}`)
    .then((response) => response.json()) as Promise<Array<CountryModel>>;
}

export default { getAllCountries, getCountriesByName };
