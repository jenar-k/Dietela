describe('Klien Menggunakan Fitur Lupa Password Dietela', () => {
    it('Klien menggunakan fitur lupa password Dietela dengan data Email yang Valid', () => {
        cy.forgotPasswordPageDietela();
        cy.emailKlienForgotPassValid();
        cy.get('[class="css-4kjjx2"]')
            .click();
        cy.get('[class="css-1kjp2z6"]')
            .should('have.text', ' Selamat ');
        cy.get('[class="router-link-active css-1s0a1g"]')
            .should('contains.text', ' Homepage ');
            
    })

    it('Klien menggunakan fitur lupa password Dietela dengan data Email yang Tidak Valid', () => {
        cy.forgotPasswordPageDietela();
        cy.emailKlienForgotPassTidakValid();
        cy.get('[class="css-4kjjx2"]')
            .click();
        cy.get('[class="css-p8kfou"]')
            .should('exist')
            .should('contains.text', 'Failed')
    })

    it('Klien menggunakan fitur lupa password Dietela dengan data Email (NULL)', () => {
        cy.forgotPasswordPageDietela();
        cy.get('[class="css-4kjjx2"]')
            .should('be.disabled')
    })

})