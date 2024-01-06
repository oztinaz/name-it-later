// https://on.cypress.io/api

describe('spotify/authorization', () => {
  it('visits spotify/authorization url', () => {
    cy.visit('/spotify/authorization')
    cy.contains('div', 'Authorizing...')
  })
})