describe('Makeup details spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan', {fixture : 'makeupData.json'})
    cy.get('.makeup-card').first().click()
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products/499.json', {fixture: 'makeupDetails.json'})
  })

  it('Should show a single products details', () => {
    cy.url().should('eq', 'http://localhost:3000/499')
    cy.get('.makeup-details-header').contains('CoverGirl truBLEND Bronzer')
    cy.get('.makeup-details-img').children().contains('covergirl')
    cy.get('.makeup-details-container').children().contains(`CoverGirl's New truBLEND Bronzer has`)
  })

  it('should be able to display error fetches fail', () => {
    cy.visit('http://localhost:3000/badUrl')
    cy.get('.error').contains('Something went wrong')
  })
})