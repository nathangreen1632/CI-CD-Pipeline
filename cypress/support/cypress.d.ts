/// <reference types="cypress" />
/// <reference types="@cypress/react" />

import { mount } from '@cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

export {};
