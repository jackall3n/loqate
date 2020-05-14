import Loqate, { Field, FieldMode, Options } from "../src";

const fields: Field[] = [{
  element: '',
  mode: FieldMode.NONE,
  field: ''
}];

const options: Options = {
  key: 'some-key',
  countries: {
    codesList: 'some-list'
  },
  setCountryByIp: true
}

const addressControl = new Loqate.Address(fields, options);
