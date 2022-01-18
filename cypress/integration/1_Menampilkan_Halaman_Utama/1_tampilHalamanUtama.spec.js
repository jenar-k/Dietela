describe('Menampilkan Halaman Landing Page Dietela', () => {
    it('Menampilkan Halaman Landing Page Dietela', () => {
        cy.landingPageDietela();
    })
    
})

describe('Testing Get API', () => {
    context('GET - activity-groups', () => {
        it('Banners meresponse dengan status code 200', () => {
            cy.request({
                method: 'GET',
                url:'https://dietela.cms.project.skyshi.io/banners'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
            });
        });

        it('Footer meresponse dengan status code 200', () => {
            cy.request({
                method: 'GET',
                url:'https://dietela.cms.project.skyshi.io/footer'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
            });
        });

                it('Body/ Products meresponse dengan status code 200', () => {
            cy.request({
                method: 'GET',
                url:'https://dietela.api.project.skyshi.io/v1/general/products'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
            });
        });

    });
});