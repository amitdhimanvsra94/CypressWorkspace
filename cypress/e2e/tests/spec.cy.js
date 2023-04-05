// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
    
//   })
// })

import homePage from 'C:\Users\amitkumark\CypressWorkspace\cypress\fixtures\pages\homePage.js'


import loginPage from 'C:\Users\amitkumark\CypressWorkspace\cypress\fixtures\pages\homePage.js'


    it('Should login to inventory page', () =>{


        cy.visit('https://bstackdemo.com/')
    
    
        homePage.clickOnSignin();
    
    
        loginPage.login();
    
    
            homePage.elements.logOffBtn().should('have.text','Logout')
    
    
    })



