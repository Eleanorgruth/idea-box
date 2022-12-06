describe('Dashboard view page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })
  it('Should be able to visit the page and render the correct elements', () => {
    cy.get('h1').contains('IdeaBox')
      .get('form')
      .get('.ideas')
  })
  it('Should have an input box to submit new ideas', () => {
    cy.get('[placeholder="title"]')
      .type('test')
      .should('have.value', 'test')
    cy.get('[placeholder="description"]')
      .type('test2')
      .should('have.value', 'test2')
  })
})