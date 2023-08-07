describe("Bad submit", () => {
  it("Should not post and render cards when form is missing name || has 0 ingredients selected, and should render a message reminding user to complete form.", () => {

    cy.intercept("GET", 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'get.json'
    })
    .as('get')

    cy.intercept("POST", 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      fixture: 'post.json'
    })
    .as('post')


    cy.visit("http://localhost:3000/")
    cy.wait('@get')

    cy.get('.order')
    .should('have.length', '3')

    cy.get('form')
    .within(()=>{
      cy.get('button')
      .last()
      .click({force: true})
      cy.get('h3')
      .should('have.text', 'You need to complete your form!')
    })
    cy.get('.order')
    .should('have.length', '3')

    cy.get('form')
    .within(()=>{
      cy.get('[name=sofritas]')
      .click({force: true})
      cy.get('button')
      .last()
      .click({force: true})
      cy.get('h3')
      .should('have.text', 'You need to complete your form!')
    })
    cy.get('.order')
    .should('have.length', '3')

    cy.get('form')
    .within(()=>{
      cy.get('input')
      .type('Nick Teets')
      cy.get('button')
      .last()
      .click({force: true})
      cy.get('h3')
      .should('have.text', 'You need to complete your form!')
    })
    cy.get('.order')
    .should('have.length', '3')

    cy.get('form')
    .within(()=>{
      cy.get('input')
      .type('Nick Teets')
      cy.get('[name=sofritas]')
      .click({force: true})
      cy.get('button')
      .last()
      .click({force: true})
      cy.wait('@post')
      cy.get('h3')
      .should('not.exist')
    })
    cy.get('.order')
    .should('have.length', '4')


  });
});
