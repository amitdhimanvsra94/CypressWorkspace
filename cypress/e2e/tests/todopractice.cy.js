
describe("Test",() =>{

    beforeEach(()=>{
      cy.visit('https://example.cypress.io/todo')
    })
  
    it("get default list of two2 items",()=>{
    cy.get('.todo-list li').should('have.length',2)
    cy.get('.todo-list li').first().should('have.text','Pay electric bill')
    cy.get('.todo-list li').last().should('have.text','Walk the dog')
  
    })
  })