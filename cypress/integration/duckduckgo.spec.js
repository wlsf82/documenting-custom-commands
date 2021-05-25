/// <reference path="../support/commands.d.ts" />

describe('DuckDuckGo', () => {
  beforeEach(() => cy.visit('/'))
  it('searches', () => {
    cy.search('cypress.io')

    cy.countResults().should('be.equal', 10)
    // or (since its result is chainable)
    cy.countResults().should(results => {
      expect(results).to.equal(10)
    })
  })

  it('searches images', () => {
    cy.searchMapsFor('Amsterdam')

    cy.get('[class*=--map]').should('be.visible')
  })

  it('searches and changes to dark mode', () => {
    cy.search('cypress.io')
    // Lets move this to a custom command?
    cy.get('.dropdown--settings a')
      .should('be.visible')
      .click()
    cy.get('.set-theme:not([style="background-color: #ffffff"])')
      .should('be.visible')
      .click({force: true})

    cy.get('body')
      .should('have.css', 'background-color', 'rgb(28, 28, 28)')
  })
})
