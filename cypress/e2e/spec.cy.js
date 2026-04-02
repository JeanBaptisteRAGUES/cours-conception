
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#root > div > :nth-child(3)').should('have.text', "Counter : 0")
    cy.get('#root > div > :nth-child(2)').click()
    cy.get('#root > div > :nth-child(3)').should('have.text', "Counter : 1")
    cy.reload()
    cy.get('#root > div > :nth-child(3)').should('have.text', "Counter : 1")

    /*
    cy.get('#root > div > :nth-child(3)').as('compteur')
    cy.get('#root > div > :nth-child(2)').as('bouton')

    cy.visit('http://localhost:5173/')

    cy.get('@compteur').should('have.text', "Counter : 0")
    cy.get('@bouton').click()
    cy.get('@compteur').should('have.text', "Counter : 1")

    cy.reload()

    cy.get('@compteur').should('have.text', "Counter : 1")
    */
  })
})