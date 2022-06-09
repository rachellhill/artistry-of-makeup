describe('Favorites functionality and page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan', {fixture : 'makeupData.json'})
    cy.get('.heart-btn').first().click()
    cy.get('.heart-btn').last().click()
  })
  
  it('Should click on favorites button and see their favorited products', () => {
    cy.get('.show-favorites-btn').click()
    cy.url().should('eq', 'http://localhost:3000/product/favorites')
    cy.get('.favoritesCard-container').children().should('have.length', 2)
    cy.get('.favorite-card').first().children().get('.favorite-container').contains('truBLEND Bronzer')
    cy.get('.favorite-card').last().children().get('.favorite-container').contains('truBLEND Blush in Medium Rose')
  })

  // add testing for error message if no favorites
})