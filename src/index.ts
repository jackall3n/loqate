import { Address } from './controls';

declare global {
  interface Window {
    pca: typeof Loqate;
    loqate: typeof Loqate;
  }
}

// Alias the variable
window.loqate = window.pca;

export declare const Loqate: {
  Address: typeof Address
};

export * from './controls';
export * from './field';
export * from './options';
export * from './types';

export default window.loqate;
