describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan', {fixture : 'makeupData.json'})
  })

  it('should show the home page with the following components', () => {
    cy.get('.nav-container').contains('Artistry of Makeup')
    cy.get('.home-btn').contains("Home")
    cy.get('.show-favorites-btn').contains('Favorites')
    cy.get('.vegan-header').contains('Shop All Vegan Products')
    cy.get('.controlled-search').should('have.attr', 'placeholder').should('include', 'Search vegan products')
    cy.get('.makeupCard-container').children().should('have.length', 4)
    cy.get('.makeup-card').first().children().should("have.length", 2)
  })
})