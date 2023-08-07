describe("fisrt visit", () => {
  it("dom should have right elements on initialization", () => {

    cy.intercept("GET", 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'get.json'
    })
    .as('get')



    cy.visit("http://localhost:3000/")
    cy.wait('@get')

    cy.get('header')
    .within(()=>{
      cy.get('h1')
      .should('have.text', 'Burrito Builder')
      cy.get('input')
      .should('have.attr', 'placeholder')
      .should('eq', 'Name')
      cy.get('input')
      .should('have.attr', 'type')
      .should('eq', 'text')
      cy.get('button')
      .eq(0)
      .should('have.text', 'beans')
      cy.get('button')
      .eq(1)
      .should('have.text', 'steak')
      cy.get('button')
      .eq(2)
      .should('have.text', 'carnitas')
      cy.get('button')
      .eq(3)
      .should('have.text', 'sofritas')
      cy.get('button')
      .eq(4)
      .should('have.text', 'lettuce')
      cy.get('button')
      .eq(5)
      .should('have.text', 'queso fresco')
      cy.get('button')
      .eq(6)
      .should('have.text', 'pico de gallo')
      cy.get('button')
      .eq(7)
      .should('have.text', 'hot sauce')
      cy.get('button')
      .eq(8)
      .should('have.text', 'guacamole')
      cy.get('button')
      .eq(9)
      .should('have.text', 'jalapenos')
      cy.get('button')
      .eq(10)
      .should('have.text', 'cilantro')
      cy.get('button')
      .eq(11)
      .should('have.text', 'sour cream')
      cy.get('button')
      .eq(12)
      .should('have.text', 'Submit Order')
      cy.get('p')
      .should('have.text', 'Order: Nothing selected')
    })
    cy.get('main')
    .within(()=>{
      cy.get('section')
      .within(()=>{
        cy.get('div')
        .first()
        .within(()=>{
          cy.get('h3')
          .should('have.text', 'Pat')
          cy.get('ul')
          .within(()=>{
            cy.get('#0')
            .should('have.text', 'beans')
            cy.get('#1')
            .should('have.text', 'lettuce')
            cy.get('#2')
            .should('have.text', 'carnitas')
            cy.get('#3')
            .should('have.text', 'queso fresco')
            cy.get('#4')
            .should('have.text', 'jalapeno')
            
          })
        })

        cy.get('div')
        .last()
        .within(()=>{
          cy.get('h3')
          .should('have.text', 'Alex')
          cy.get('ul')
          .within(()=>{
            cy.get('#0')
            .should('have.text', 'sofritas')
            cy.get('#1')
            .should('have.text', 'sour cream')
            cy.get('#2')
            .should('have.text', 'carnitas')
  

          })
        })
      })
    })


  });
});
