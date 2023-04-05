import loginPage from '../../pageobjects/loginPage'

describe('POM Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('https://demo.guru99.com/test/newtours/login.php');
})
const loginObj = new loginPage();
 it('Verify Login successful', () => {
//    const loginObj = new loginPage();
loginObj.enterUsername('selenium@qa')
.enterPassword('qa@12345')
.clickSubmit()
.elements.successTxt().should('have.text','Login Successfully');
 })

 it('Verify Login unsuccessful for invalid username/password', () => {
//    const loginObj = new loginPage();
   loginObj.enterUsername('selenium')
   .enterPassword('qa@123')
   .clickSubmit()
   .elements.errorTxt().should('contain','Enter your userName and password correct');
 })
 it.only('Try for file upload',()=>{
    loginObj.clickSelenium()
    .clickOnfileupload()
    .clickUploadbutton()
 })
})