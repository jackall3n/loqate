import Field from "../field";
import Options from "../options";

declare class Address {
  /**
   * Creates an Address control
   * @param field
   * @param options
   */
  constructor(field: Field[], options: Options);

  listen: {
    (event: "load", callback: () => void): void;
    (event: "populate", callback: (address: any, variation: any) => void): void;
  };

  load(): void;
}

export default Address;
