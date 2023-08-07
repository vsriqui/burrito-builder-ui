describe("Good post", () => {
  it("Should post and receive the data", () => {

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
      cy.get('input')
      .type('Nick Teets')
      cy.get('[name=sofritas]')
      .click({force: true})
      cy.get('[name=lettuce]')
      .click({force: true})
      cy.get('[name=carnitas]')
      .click({force: true})
      cy.get('button')
      .last()
      .click({force: true})
      cy.wait('@post').then((intercept) => {
        expect(intercept.response.body).to.deep.equal(
          {"name":"Nick Teets","ingredients":["sofritas","lettuce","carnitas"]}
        );
      });
    })
    cy.get('.order')
    .should('have.length', '4')
    cy.get('.order')
    .last()
    .within(()=>{
      cy.get('h3')
      .contains('Nick Teets')
      cy.get('ul')
      .within(()=>{
        cy.get('li')
        .eq(0)
        .should('have.text', 'sofritas')
        cy.get('li')
        .eq(1)
        .should('have.text', 'lettuce')
        cy.get('li')
        .eq(2)
        .should('have.text', 'carnitas')
      })
    })

  });
});
