describe('Menampilkan Halaman Login-Empty', () => {
    it('Menampilkan Halaman Login-Empty', () => {
        cy.landingPageDietela();
        cy.get('[class="css-1p4nm94"]')
            .click();
        cy.url()
            .should('include', 'https://dietela.web.project.skyshi.io/#/login-empty');
        cy.get('[class="css-1p64g6q"]')
            .should('exist');
        cy.get('[class="css-8cbz1y"]')
            .should('exist');
        
    })
    
})