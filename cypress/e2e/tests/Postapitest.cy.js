describe('Post api test ', () => {
    // const datajson = require('../../fixtures/example')
    let accesstoken = 'bd79803be40401d5bf06205ee33d9ec562e3354a92e9f4f417920e58fe5d9168';

    let randonText = '';
    let testemail = '';

    it('Send post with body', () => {

        for (var i = 0; i <= 10; i++) {
            randonText += accesstoken.charAt(Math.floor(Math.random() * accesstoken.length))
        }
        testemail = randonText + '@gmail.com'

        cy.fixture('example').then((fixturedata) => {

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'authorization': "Bearer bd79803be40401d5bf06205ee33d9ec562e3354a92e9f4f417920e58fe5d9168"
                },
                body: {
                    "name": fixturedata.name,
                    "email": testemail,
                    "gender": fixturedata.Gender,
                    "status": fixturedata.Status
                }
            }).then((res) => {
                expect(res.status).to.eq(201)
                // cy.log(JSON.stringify(res.body))
                // cy.log(JSON.stringify(res.duration))
                // cy.log(JSON.stringify(res.headers))
                // console.log(JSON.stringify(res.body))
                expect(res.body.email).to.eq(testemail)
                expect(res.body.status).to.eq('active')
            }).then((res)=>{
                var userid = res.body.id
                cy.log('userid',userid)
                cy.request({
                    method : 'GET',
                    url : 'https://gorest.co.in/public/v2/users/'+userid,
                    headers: {
                        'authorization': "Bearer bd79803be40401d5bf06205ee33d9ec562e3354a92e9f4f417920e58fe5d9168"
                    }
                }).then((res)=>{
                  expect(res.body.id).to.eq(userid)
                  expect(res.body.email).to.eq(testemail)
                  expect(res.body.status).to.eq('active')
                })
            })
        })
    })
})