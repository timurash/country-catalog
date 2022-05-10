import CountryModel from '../models/CountryModel/CountryModel';

export function formatToKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function formatKebabToNormal(input: string): string {
  return input.split('-').join(' ');
}

export function getCurrenciesCaption(country: CountryModel): string {
  return Object.keys(country.currencies)
    .map((currencyKey) => `${currencyKey} `
      + `(${country.currencies[currencyKey].name}: ${country.currencies[currencyKey].symbol})`)
    .join(', ');
}

export function getTimezonesCaption(country: CountryModel): string {
  return Object.values(country.timezones).join(', ');
}

export function getLanguagesCaption(country: CountryModel): string {
  return Object.values(country.languages).join(', ');
}

export function getPopulationCaption(country: CountryModel): string {
  const formatter = new Intl.NumberFormat('en', {
    maximumSignificantDigits: 3,
  });

  return formatter.format(country.population);
}