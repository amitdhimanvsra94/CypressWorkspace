class loginPage{

    elements = { 
         usernameInput : () => cy.get('input[name="userName"]'),      
         passwordInput : () => cy.get('input[name="password"]'),    
         loginBtn : () => cy.get('input[name="submit"]'),
         successTxt : () => cy.get('h3'),
         errorTxt : () => cy.get('span'),
         seleniumdropdown :() => cy.get('.dropdown-toggle').eq(0),
         fileuploadlink :()=> cy.get('.dropdown-menu > :nth-child(10) > a'),
         fileuploadbutton : ()=> cy.get('#uploadfile_0'),
         checkbox:()=>cy.get('#terms'),
         submit:()=>cy.get('#submitbutton')
     }
     enterUsername(username)
     {
         this.elements.usernameInput().clear();
         this.elements.usernameInput().type(username);
         return this
     }
  
     enterPassword(password)
     {
         this.elements.passwordInput().clear();
         this.elements.passwordInput().type(password);
         return this
     }
    
     clickSubmit() {
         this.elements.loginBtn().click();
         return this
     }
     clickSelenium(){
        this.elements.seleniumdropdown().click();
        return this
     }
     clickOnfileupload(){
        this.elements.fileuploadlink().click();
        return this
     }

     clickUploadbutton(){
      this.elements.fileuploadbutton().selectFile('cypress/fixtures/example.json',{
        action:"drag-drop"
      })
      this.elements.checkbox().click();
      this.elements.submit().click()
      return this
     }
  
  }
  
  
  export default loginPage;