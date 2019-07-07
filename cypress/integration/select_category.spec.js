describe('Category', () => {
	it('selects a product and views basket', () => {
		cy.visit('http://localhost:3000/Medical').wait(1000);

		cy.get('[data-cy="category"]')
			.click()
			.wait(1000);

		cy.get('[data-cy="category-item"]')
			.first()
			.click({ force: true })
			.wait(1000);

		cy.get('[data-cy="product-link"]')
			.first()
			.click()
			.wait(1000);

		cy.get('[data-cy="buy-button"]')
			.click()
			.wait(1000);

		cy.get('.ui.primary.button')
			.first()
			.click()
			.wait(1000);

		cy.get('[data-cy="shopping-item"]');
	});
});
