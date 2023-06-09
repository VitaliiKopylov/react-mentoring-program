/// <reference types="Cypress" />

describe('GenreSelect spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('[data-cy="Comedy-genre-select"]').click();
    cy.get('[data-cy="Comedy-genre-select-wrapper"]').should(($div) => {
      const className = $div[0].className;
      expect(className).to.match(/genresFiltersItemActive/);
    });
  });
});
