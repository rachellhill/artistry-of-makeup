describe('Makeup details spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan', {fixture : 'makeupData.json'})
    cy.get('.makeup-card').first().click()
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products/499.json', {fixture: 'makeupDetails.json'})
  })

  it('Should', () => {
    
  })
})