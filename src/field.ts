export enum FieldMode {
  NONE = 0,
  SEARCH = 1,
  POPULATE = 2,
  DEFAULT = 3,
  PRESERVE = 4,
  COUNTRY = 8
}

export interface Field {
  element: string;
  field: string;
  mode?: FieldMode
}

export default Field;
