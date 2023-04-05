
import homePage from '../../pages/homePage'


import loginPage from '../../pages/loginPage'


    it('Should login to inventory page', () =>{


        cy.visit('https://bstackdemo.com/')
    
    
        homePage.clickOnSignin();
    
    
        loginPage.login();
    
    
            homePage.elements.logOffBtn().should('have.text’,’Logout')
    
    
    })



