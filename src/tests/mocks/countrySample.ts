import CountryModel from '../../models/CountryModel/CountryModel';

export default {
  flags: {
    png: 'https://flagcdn.com/w320/uy.png',
  },
  name: {
    common: 'Uruguay',
    official: 'Oriental Republic of Uruguay',
    nativeName: {
      spa: {
        official: 'República Oriental del Uruguay',
        common: 'Uruguay',
      },
    },
  },
  currencies: {
    UYU: {
      name: 'Uruguayan peso',
      symbol: '$',
    },
  },
  capital: [
    'Montevideo',
  ],
  languages: {
    spa: 'Spanish',
  },
} as CountryModel;
