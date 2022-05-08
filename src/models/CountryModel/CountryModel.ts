import CountryCurrencyModel from './CountryCurrencyModel';

export default interface CountryModel {
  name: {
    common: string,
    official: string,
  },
  currencies: Array<CountryCurrencyModel>,
  capital: string,
  maps: {
    googleMaps: string,
  },
  flags: {
    png: string,
  },
  languages: {
    [key: string]: string,
  },
}
