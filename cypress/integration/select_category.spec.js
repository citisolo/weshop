describe.('Selecting a category', () => {
  it('displays categories', () => {
    cy.visit('/');

    cy.get('[data-cy="category-item"]')[0]
      .click();

    cy.get('[data-cy="product"')[0]
      .click();
    
    cy.get('[data-cy="add-to-basket"')
      .click();
    
    cy.visit('/basket');

    cy.get('[data-cy="shopping-basket"')
      .should('have.length', '')

  })
})