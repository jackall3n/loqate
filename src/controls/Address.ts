import Field from "../field";
import Options from "../options";
import { AddressResult } from "../types";

export declare class Address {
  /**
   * Creates an Address control
   * @param field
   * @param options
   */
  constructor(field: Field[], options: Options);

  /**
   * Create callbacks for event listeners
   */
  listen: {
    (event: "load" | "show" | "hide" | "noresults" | "display" | "manual", callback: () => void): void;
    (event: "select", callback: (suggestion: any) => void): void;
    (event: "search", callback: (search: any) => void): void;
    (event: "results", callback: (results: any[], attributes: any[]) => void): void;
    (event: "populate" | "prepopulate", callback: (address: AddressResult, variation: AddressResult[]) => void): void;
    (event: "country", callback: (country: any) => void): void;
    (event: "error", callback: (error: any) => void): void;
  };

  load(): void;

  addManualEntryItem(): void;

  setCountry(country: string): void;
}
