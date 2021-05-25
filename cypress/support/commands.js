/// <reference types="cypress" />

Cypress.Commands.add('search', term => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .type(`${term}{enter}`)
})

Cypress.Commands.add('countResults', () => {
  cy.get('.results .result:not([class="result result--more"])')
    .its('length')
})

Cypress.Commands.add('searchMapsFor', term => {
  cy.search(term)
  cy.get('li')
    .contains('Maps')
    .click()
})

Cypress.Commands.add('changeToDarkMode', () => {
  cy.get('.dropdown--settings a')
    .should('be.visible')
    .click()
  cy.get('.set-theme:not([style="background-color: #ffffff"])')
    .should('be.visible')
    .click({force: true})
})
