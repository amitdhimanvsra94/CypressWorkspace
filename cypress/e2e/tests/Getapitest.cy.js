describe('api test suit',()=>{

    it('first test ',()=>{
     
      
     cy.request({
        method:'GET',
        url :'https://gorest.co.in//public/v2/users/',
        headers : {
            'authorrization':"Bearer bd79803be40401d5bf06205ee33d9ec562e3354a92e9f4f417920e58fe5d9168"
        }
     }).then((res)=>{
         
        cy.log(JSON.stringify(res.body[0]))
        // cy.log(JSON.stringify(res.body))
        cy.log(JSON.stringify(res.body[0].name))
        // expect(res.status).to.eq(200);
        expect(res.body[0].name).to.eq("Chandramohan Chopra PhD")
        expect(res.body[0].email).to.eq("phd_chopra_chandramohan@stroman.com")
        // expect(res.status).to.eq(200)
        
     })
     
     
        // cy.visit('https://filiphric.com/working-with-api-response-data-in-cypress')
    })

})