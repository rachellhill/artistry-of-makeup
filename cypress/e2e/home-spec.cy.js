describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan', {fixture : 'makeupData.json'})
  })

  it('should show the home page with the following components', () => {
    cy.get('.nav-container').contains('Artistry of Makeup')
    cy.get('.home-btn').contains("Home")
    cy.get('.show-favorites-btn').contains('Favorites')
    cy.get('.vegan-header').contains('All Vegan Products')
    cy.get('.controlled-search').should('have.attr', 'placeholder').should('include', 'Search vegan products')
    cy.get('.makeupCard-container').children().should('have.length', 4)
    cy.get('.makeup-card').first().children().should("have.length", 2)
  })

  it('should show the user a live search when searching for a product name', () => {
    cy.get('.controlled-search').type('blush')
    cy.get('.makeupCard-container').children().should('have.length', 2)
    cy.get('.makeup-card').first().children().contains('truBLEND Blush in Light Rose')
    cy.get('.makeup-card').last().children().contains('truBLEND Blush in Medium Rose')
    cy.reload()
  })

  it('should show an error message if no search matches a product', () => {
    cy.get('.controlled-search').type('hello')
    cy.get('.search-error').contains('Sorry, nothing matches your search. Try searching a different product!')
  })

  it('should be able to display error fetches fail', () => {
    cy.visit('http://localhost:3000/badUrl')
    cy.get('.error').contains('Something went wrong')
  })
})