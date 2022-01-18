describe('Super Admin Menggunakan Fitur Lupa Password Dietela', () => {
    it('Ahli Gizi menggunakan fitur lupa password Dietela dengan data Email yang Valid', () => {
        cy.forgotPasswordPageDietela();
        cy.emailAGForgotPassValid();
        cy.get('[class="css-4kjjx2"]')
            .click();
        cy.get('[class="css-1kjp2z6"]')
            .should('have.text', ' Selamat ');
        cy.get('[class="router-link-active css-1s0a1g"]')
            .should('contains.text', ' Homepage ');
            
    })

    it('Super Admin menggunakan fitur lupa password Dietela dengan data Email yang Tidak Valid', () => {
        cy.forgotPasswordPageDietela();
        cy.emailAGForgotPassTidakValid();
        cy.get('[class="css-4kjjx2"]')
            .click();
        cy.get('[class="css-p8kfou"]')
            .should('exist')
            .should('contains.text', 'Failed')
    })

    it('Super Admin menggunakan fitur lupa password Dietela dengan data Email (NULL)', () => {
        cy.forgotPasswordPageDietela();
        cy.get('[class="css-4kjjx2"]')
            .should('be.disabled')
    })

})