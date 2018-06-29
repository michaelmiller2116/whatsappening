
describe('Bridge The Fridge', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('https://whats-appening.firebaseapp.com/#/')
    
    cy.get('#app > nav > div > img').should('have.attr', 'src', `logo2.png`)


    // cy.title().should('include', 'Bridge The Fridge')
    // cy.get('header img').should("have.attr", "src", `/static/bridge-the-fridge-logo.png`)
    // cy.get("#top > form > label").should('have.text', "Add Ingredients (separated by commas)")
    // cy.get("#search-bar > input").should("be.empty")
    // cy.get("#search-bar > input").type('rice, beans, chicken')
    // cy.get("#search-bar > button").click()
    // cy.get("#recipe-container > li").should("have.length.above", 7)
    // cy.get("#recipe-container > li > div.card > div > div").eq(0).children()
    //   .eq(0).children('img','h4').should('exist')
    // cy.get("#recipe-container > li > div.card > div > div").eq(0).children()
    //   .eq(1).children('img','p').should('exist')
    // cy.get('#recipe-container > li > div.card').eq(0).click()
    // cy.get('#modal-center1___BV_modal_header_').children('h5').should('exist')
    // cy.get('body').children('img', 'h6').should('exist')
    // cy.get('body > ul').should("have.length.above", 2)
    // cy.get('#modal-center1___BV_modal_header_ > button').eq(0).click()
  })
})
