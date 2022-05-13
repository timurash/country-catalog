export default interface CountryModel {
  name: {
    common: string,
    official?: string,
  },
  currencies?: {
    [key: string]: {
      name: string,
      symbol: string,
    },
  },
  capital?: Array<string>,
  maps?: {
    googleMaps: string,
  },
  flags?: {
    png: string,
  },
  languages?: {
    [key: string]: string,
  },
  population?: number,
  region?: string,
  timezones?: Array<string>,
}
