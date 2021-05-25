/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /** 
     * Searches by the specified term by typing and pressing ENTER
     * 
     * @example cy.search('cypress.io')
     */
    search(term: string): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Counts all elements that match the following selector:
     *
     * '.results .result:not([class="result result--more"])'
     *
     * Meaning that it searches for all results but the 'More results' button
     * 
     * @example cy.countResults().should('be.equal', 10)
     */
    countResults(): Cypress.Chainable<number>
    /**
     * Searches by a term and goes to the maps view
     * 
     * @example cy.searchMapFor('cypress.io')
     */
    searchMapsFor(term: string):Cypress.Chainable<JQuery<HTMLElement>>
  }
}
