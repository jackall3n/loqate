export interface Countries {
  codesList: string;
}

export interface Options {
  key: string;
  countries?: Countries;
  setCountryByIp?: boolean;
  GeoLocationEnabled?: boolean;
  GeoLocationRadius?: number;
  GeoLocationMaxItems?: number;
}

export default Options;
