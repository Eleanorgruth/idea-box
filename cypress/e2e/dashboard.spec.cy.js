beforeEach(() => {
  cy.visit('http://localhost:3000');
});
describe('Dashboard view page', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })
  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      .get('h1').contains('IdeaBox')
      .get('form')
      .get('.ideas')
  })
});